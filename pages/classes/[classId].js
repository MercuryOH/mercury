import React, { Component } from 'react'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Layout from '../../components/layout'
import { Button, Accordion, List, Icon } from 'semantic-ui-react'
import { AuthRequired } from '../../components/authProvider'
import Queue from '../../components/queue/queue'
import * as api from '../../util/mercuryService'
import CreateGroupModal from '../../components/createGroupModal'
import StudentInviteModal from '../../components/invite/studentInviteModal'
import { EventEmitter } from '../../components/util/EventEmitter'
import FeedbackModal from '../../components/feedbackModal'
import StudentWebSocketClient from '../../util/studentWebSocket'
import TAWebSocketClient from '../../util/taWebSocket'
import ReceiveInviteModal from '../../components/invite/receiveInviteModal'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import GroupJoinRequestModal from '../../components/invite/groupJoinRequestModal'
import WaitingForRequestApprovalModal from '../../components/invite/WaitingForRequestApprovalModal'

const ScreenContainer = dynamic(
  () => import('../../components/screenContainer'),
  {
    ssr: false,
  }
)

const CreateDiscussionModal = dynamic(
  () => import('../../components/createDiscussionModal'),
  {
    ssr: false,
  }
)

class ClassPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      withTa: false,
      clicked: 'none',
      currentGroup: { id: '', name: '' },
      currentClass: {
        id: '',
        name: '',
        groups: [],
        users: [],
        role: 'Student',
      },
      vonageCred: null,
      isMounted: false,
    }
    this.defineEventEmitterCallbacks()
  }

  joinGroup(group) {
    api
      .postGroupToken(this.classId, group.id)
      .then(({ token }) => {
        this.setState({ vonageCred: null })
        this.setState({ vonageCred: { sessionId: group.sessionId, token } })
        this.setState({ currentGroup: group })
        EventEmitter.publish('currentGroupChange', group)
      })
      .catch(console.error)
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('clearLeftSide', () => {
      this.setState({ withTa: true })
    })

    EventEmitter.subscribe('joinPrivateGroupOnApproval', (group) => {
      EventEmitter.publish('removeWaitingForRequestApprovalModal')
      this.joinGroup(group)
    })

    EventEmitter.subscribe('notifyJoinRequestDeclined', (group) => {
      NotificationManager.info(
        `Your Request To Join ${group.name} Was Declined`
      )
      EventEmitter.publish('removeWaitingForRequestApprovalModal')
    })

    EventEmitter.subscribe('fetchGroups', () => {
      this.fetchCurrentClass()
    })
  }

  componentDidMount() {
    const { classId } = this.props.router.query
    if (!classId) return
    this.classId = Number(classId)

    api
      .getMe()
      .then((meData) => {
        this.user = meData
      })

      .then(() => api.getClass(this.classId))
      .then((c) => {
        const userRole = c.users.find((u) => u.id === this.user.id)
        if (!userRole) this.props.router.push('/calendar')
        const { role } = userRole

        /**
         * Start the appropriate web socket handler depending on the user role
         */

        if (role === 'Student') {
          /**
           * Start student web socket handler
           */

          new StudentWebSocketClient().start({
            me: this.user,
            courseId: this.classId,
          })
        } else {
          /**
           * Start TA web socket handler
           */

          new TAWebSocketClient().start({
            me: this.user,
            courseId: this.classId,
            onJoin: this.handleSelectGroup,
          })
        }

        this.setState({
          currentClass: {
            ...c,
            role: userRole.role,
          },
          isMounted: true,
        })

        EventEmitter.publish(
          'allOtherStudentsInClass',
          this.state.currentClass.users.filter(
            (user) => user.id !== this.user.id && user.role === 'Student'
          )
        )

        EventEmitter.publish('me', this.user)
      })
      .catch(console.error)
  }

  fetchCurrentClass = () => {
    api
      .getClass(this.classId)
      .then((c) => {
        const userRole = c.users.find((u) => u.id === this.user.id)
        if (!userRole) this.props.router.push('/calendar')
        this.setState({
          currentClass: {
            ...c,
            role: userRole.role,
          },
        })
      })
      .catch(console.error)
  }

  handleBack = async () => {
    await this.props.router.push('/calendar')
  }

  handleSelectGroup = async (group) => {
    const { role } = this.state.currentClass

    if (group.type === 'office' || role === 'Professor') {
      // you are popped off the waiting queue
      this.joinGroup(group)
      return
    }

    /**
     * First, check if you are the leader of the group
     */

    const currGroup = await api.getGroupByID(this.classId, group.id)
    const { UserId } = currGroup
    const { id } = this.user

    if (UserId === id) {
      // you are the leader of the group, no need for authentication
      this.joinGroup(group)
    } else {
      /**
       * Ping group leader to let you into the group
       */
      EventEmitter.publish('activateWaitingForRequestApprovalModal', group)
      EventEmitter.publish('requestJoinGroup', {
        userId: id,
        group: group,
      })
    }
  }

  getButtonToDisplay() {
    return this.state.currentClass.role === 'Student' ? (
      <CreateGroupModal onCreate={this.handleCreateGroup} />
    ) : this.state.clicked === 'none' ? (
      <Button
        color="teal"
        content="Modify Discussions"
        fluid
        style={{ fontSize: '1vw' }}
        onClick={() => {
          this.setState({ clicked: 'inline' })
        }}
      />
    ) : (
      <>
        <CreateDiscussionModal
          id="createDiscussionModal"
          onCreate={this.handleCreateGroup}
        />
        <Button
          color="red"
          content="Done"
          fluid
          style={{ fontSize: '1vw', marginTop: '2%' }}
          onClick={() => {
            this.setState({ clicked: 'none' })
          }}
        />
      </>
    )
  }

  getDeleteButton(group) {
    return (
      <Button
        id={`deletebutton${group.id}`}
        compact
        icon
        size="mini"
        floated="right"
        style={{
          display: `${this.state.clicked}`,
          fontSize: '.6vw',
          textAlign: 'center',
          width: '10%',
          marginBottom: '2%',
          minWidth: '10px',
          backgroundColor: 'transparent',
        }}
        onClick={() =>
          api
            .deleteGroup(this.classId, group.id)
            .then(() => this.fetchCurrentClass())
        }
      >
        <Icon name="delete" color="red" />
      </Button>
    )
  }

  handleCreateGroup = async (group) => {
    const groupData = await api.postGroup(
      this.classId,
      group.name,
      group.type,
      this.user.id
    )
    this.fetchCurrentClass()
    EventEmitter.publish('newGroupCreated', this.classId)
    await this.handleSelectGroup(groupData)
  }

  showInviteButton(group) {
    const plusIcon = (
      <List.Icon
        name="user plus"
        onClick={() => {
          EventEmitter.publish('openInviteModal', true)
        }}
      />
    )
    const noPlusIcon = <div></div>

    return this.state.currentGroup.id == group.id &&
      this.state.vonageCred !== null
      ? plusIcon
      : noPlusIcon
  }

  getListItemStyle(group) {
    const unClickedGroupsStyle = {
      fontSize: '.8vw',
      textAlign: 'left',
      width: '80%',
      marginBottom: '2%',
      minWidth: '41px',
      display: 'inline-block',
    }

    const clickedGroupsStyle = {
      fontSize: '.8vw',
      textAlign: 'left',
      width: '80%',
      marginBottom: '2%',
      minWidth: '41px',
      background: '#e0e1e2',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      display: 'inline-block',
    }

    return this.state.currentGroup.id == group.id &&
      this.state.vonageCred !== null
      ? clickedGroupsStyle
      : unClickedGroupsStyle
  }

  showOffice() {
    return (
      (this.state.currentClass.role !== 'Student' ||
        this.state.currentGroup.type === 'office') && (
        <div style={{ paddingLeft: 20 }}>
          <List relaxed selection verticalAlign="middle">
            {this.state.currentClass.groups
              .filter((group) => group.type === 'office')
              .map((group) => (
                <List.Item
                  key={`office`}
                  onClick={() => {
                    if (this.state.currentGroup.id !== group.id) {
                      this.handleSelectGroup(group)
                    }
                  }}
                  style={this.getListItemStyle(group)}
                >
                  <List.Icon name="graduation cap" />
                  <List.Content>
                    <List.Header as="a">TA Office</List.Header>
                  </List.Content>
                  {this.showInviteButton(group)}
                </List.Item>
              ))}
          </List>
        </div>
      )
    )
  }

  leftDisplay() {
    return this.state.withTa === false ? (
      <div style={{ height: '100%', marginLeft: '2.5%' }}>
        <Button.Group
          size="huge"
          style={{ marginBottom: 12, width: '100%' }}
          fluid
        >
          <Button
            compact
            icon="angle left"
            content={this.state.currentClass.name}
            style={{
              fontSize: '1.5vw',
              textAlign: 'left',
              width: '75%',
              marginBottom: '2%',
              minWidth: '41px',
            }}
            onClick={this.handleBack}
          />
          <Button
            compact
            icon="setting"
            style={{
              fontSize: '1.5vw',
              textAlign: 'center',
              width: '15%',
              marginBottom: '2%',
              minWidth: '14px',
            }}
          />
        </Button.Group>
        {this.showOffice()}
        <Accordion
          fluid
          exclusive={false}
          defaultActiveIndex={[0, 1]}
          style={{
            fontSize: '1vw',
            textAlign: 'left',
            width: '100%',
            marginBottom: '2%',
            minWidth: '41px',
          }}
          panels={[
            {
              key: 'discussions',
              title: 'Discussions',
              content: {
                content: (
                  <div
                    style={{ paddingLeft: 20, height: 200, overflow: 'auto' }}
                  >
                    <List relaxed selection>
                      {this.state.currentClass.groups
                        .filter((group) => group.type === 'discussion')
                        .map((group) => (
                          <>
                            <List.Item
                              key={`discussion_${group.id}`}
                              onClick={() => {
                                if (this.state.currentGroup.id !== group.id) {
                                  this.handleSelectGroup(group)
                                }
                              }}
                              style={this.getListItemStyle(group)}
                            >
                              <List.Icon name="sound" />
                              <List.Content>
                                <List.Header as="a">{group.name}</List.Header>
                              </List.Content>
                              {this.showInviteButton(group)}
                            </List.Item>
                            {this.getDeleteButton(group)}
                          </>
                        ))}
                    </List>
                  </div>
                ),
              },
            },
            {
              key: 'private-groups',
              title: 'Private Groups',
              content: {
                content: (
                  <div
                    style={{ paddingLeft: 20, height: 200, overflow: 'auto' }}
                  >
                    <List relaxed selection>
                      {this.state.currentClass.groups
                        .filter((group) => group.type === 'group')
                        .map((group) => (
                          <List.Item
                            key={`private_group_${group.id}`}
                            onClick={() => {
                              if (this.state.currentGroup.id !== group.id) {
                                this.handleSelectGroup(group)
                              }
                            }}
                            style={this.getListItemStyle(group)}
                          >
                            <List.Icon name="lock" />
                            <List.Content>
                              <List.Header as="a">{group.name}</List.Header>
                            </List.Content>
                            {this.showInviteButton(group)}
                          </List.Item>
                        ))}
                    </List>
                  </div>
                ),
              },
            },
          ]}
        />
        <div
          style={{
            position: 'absolute',
            width: 'calc(100% - 38px)',
            bottom: 14,
          }}
        >
          {this.getButtonToDisplay()}
        </div>
      </div>
    ) : (
      <div> </div>
    )
  }

  render() {
    if (!this.state.isMounted) {
      return null
    }

    return (
      <Layout
        left={this.leftDisplay()}
        right={<Queue onJoin={this.handleSelectGroup} />}
      >
        {this.state.vonageCred && (
          <ScreenContainer
            style={{ width: '100%', maxHeight: '75vh' }}
            sessionId={this.state.vonageCred.sessionId}
            token={this.state.vonageCred.token}
            onLeave={() => {
              this.setState({
                vonageCred: null,
                currentGroup: { id: '', name: '' },
                withTa: false,
              })
              EventEmitter.publish('currentGroupChange', { id: '', name: '' })
              EventEmitter.publish('callOver', this.classId)
            }}
          />
        )}
        <StudentInviteModal />
        <FeedbackModal />
        <ReceiveInviteModal onJoin={this.handleSelectGroup} />
        <GroupJoinRequestModal />
        <WaitingForRequestApprovalModal />
        <NotificationContainer />
      </Layout>
    )
  }
}
export default AuthRequired(withRouter(ClassPage))
