import React, { Component } from 'react'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Layout from '../../components/layout'
import { Button, Accordion, List, Icon, Label } from 'semantic-ui-react'
import { AuthRequired } from '../../components/authProvider'
import Queue from '../../components/queue/queue'
import * as api from '../../util/mercuryService'
import CreateGroupModal from '../../components/createGroupModal'
import UserInviteModal from '../../components/invite/userInviteModal'
import { EventEmitter } from '../../components/util/EventEmitter'
import FeedbackModal from '../../components/feedbackModal'
import StudentWebSocketClient from '../../util/studentWebSocket'
import TAWebSocketClient from '../../util/taWebSocket'
import ReceiveInviteModal from '../../components/invite/receiveInviteModal'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import GroupJoinRequestModal from '../../components/invite/groupJoinRequestModal'
import WaitingForRequestApprovalModal from '../../components/invite/WaitingForRequestApprovalModal'
import WaitingForNewLeaderModal from '../../components/WaitingForNewLeaderModal'
import AccessDeniedModal from '../../components/accessDeniedModal'
import OfficeAccessModal from '../../components/officeAccessModal'
import BroadcastModal from '../../components/broadcastModal'
import ReceiveBroadcastModal from '../../components/receiveBroadcastModal'
import { confirmAlert } from 'react-confirm-alert' // Import

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
        //groups: [],
        users: [],
        role: 'Student',
      },
      vonageCred: null,
      isMounted: false,
      allGroups: [],
      toRejoin: false, // activate rejoin option confirm alert
    }

    this.defineEventEmitterCallbacks()
  }

  fetchAllGroups = () => {
   api
      .getGroups(this.classId)
      .then((groups) => this.setState({ allGroups: groups }))
  }

  takeOne(arr) {
    if (arr.length == 0) {
      throw new Error('Should not be empty')
    }

    return arr[0]
  }

  isProfessor() {
    const { currentClass } = this.state
    const { users } = currentClass

    const mySelf = users.filter(({ id }) => id === this.user.id)
    return (
      this.takeOne(mySelf).role === 'Professor' ||
      this.takeOne(mySelf).role === 'TA'
    )
  }

  needToBootStudent() {
    return this.isProfessor() && this.state.currentGroup.type == 'office'
  }

  joinGroup(group) {
    this.fetchAllGroups()
    if (
      this.state.allGroups.filter((g) => g.id == group.id).length > 0 ||
      group.UserId == this.user.id
    ) {
      api
        .postGroupToken(this.classId, group.id)
        .then(({ token }) => {
          if (this.state.currentGroup.id !== '') {
            //the user is currently in a call, leave the call first

            if (group.type === 'office') {
              // this case only happens when the user is leaving a private group for the TA office
              // do not trigger the callOver event in this case
              this.leaveGroupForTAOffice()
            } else {
              this.leaveGroup()
            }
          }

          this.setState(
            {
              vonageCred: { sessionId: group.sessionId, token },
              currentGroup: group,
            },
            () => {
              EventEmitter.publish('userJoinGroup', {
                groupId: group.id,
                userId: this.user.id,
                groupType: group.type,
              })
              EventEmitter.publish('currentGroupChange', group)

              // log the credentials of your most recent call
              localStorage.setItem('lastCallEntered', JSON.stringify(group))
            }
          )
        })
        .then(() => {
          api
            .postJoinGroup(this.classId, group.id, this.user.email)
            .then(() =>
              EventEmitter.publish('classGroupSetChanged', this.classId)
            )
        })
        .then(() => {
          this.fetchAllGroups()
        })
        .catch(console.error)
    }
  }

  leaveGroupForTAOffice = () => {
    api
      .deleteGroupUser(
        this.classId,
        this.state.currentGroup.id,
        this.user.id
      )
      .catch(console.error)

    this.fetchAllGroups()
    EventEmitter.publish('classGroupSetChanged', this.classId)
    EventEmitter.publish('userLeaveGroup', this.state.currentGroup)
    this.setState({
      vonageCred: null,
      currentGroup: { id: '', name: '' },
      withTa: true,
    })
    EventEmitter.publish('currentGroupChange', { id: '', name: '' })
    localStorage.removeItem('lastCallEntered')
  }

  leaveGroup = () => {
    const needToBootStudent = this.needToBootStudent()

    const currentGroupId = this.state.currentGroup.id
    api
      .deleteGroupUser(
        this.classId,
        this.state.currentGroup.id,
        this.user.id
      )
      .catch(console.error)

    this.fetchAllGroups() // re-fetch current groups
    EventEmitter.publish('classGroupSetChanged', this.classId) // tell everyone to re-fetch their groups in the class
    EventEmitter.publish('userLeaveGroup', this.state.currentGroup) // notify backend that you have left the call

    /**
     * If the TA left the office, boot the current student
     */

    this.setState({
      // leave the call
      vonageCred: null,
      currentGroup: { id: '', name: '' },
      withTa: false,
    })

    EventEmitter.publish('currentGroupChange', { id: '', name: '' }) // change current group
    EventEmitter.publish('callOver', {
      classId: this.classId,
      needToBootStudent,
      currentGroupId,
      myId: this.user.id,
    }) // signal call over, which triggers feedback modal and curr student update on the queue
    localStorage.removeItem('lastCallEntered')
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
      this.fetchAllGroups()
    })

    EventEmitter.subscribe('createNotification', (msg) => {
      NotificationManager.info(msg)
    })

    /*EventEmitter.subscribe('createTAOffice', (classUser) => {
      this.fetchAllGroups()
      this.handleCreateTAOffice({
        classId: classUser.classId,
        name: this.user.firstName + ' ' + this.user.lastName + "'s Office",
        type: 'office',
        userId: classUser.userId,
      })
    })*/

    EventEmitter.subscribe('leaveCallOnError', () => {
      this.leaveGroup()
    })

    EventEmitter.subscribe('bootFromCall', (groupToBoot) => {
      if (this.state.currentGroup.id === groupToBoot) {
        this.leaveGroup()
        NotificationManager.info(`The TA Has Finished Helping You`)
      }
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
        this.role = userRole.role

        let toRejoin = false
        /**
         * Start the appropriate web socket handler depending on the user role
         */

        if (this.role === 'Student') {
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

          if (localStorage.getItem('lastCallEntered')) {
            // if you were previously involved in a call, please allow rejoin option
            toRejoin = true
          }
        }

        this.setState({
          currentClass: {
            ...c,
            role: userRole.role,
          },
          toRejoin,
        })
      })
      .then(() => {
        this.fetchAllGroups()
      })
      .then(() => {
        setInterval(this.fetchAllGroups, 10000)
      })
      .then(() => {
        this.setState({ isMounted: true })
        EventEmitter.publish(
          'allOtherUsersInClass',
          this.state.currentClass.users.filter(
            (user) => user.id !== this.user.id && user.role === this.role
          )
        )
        EventEmitter.publish('me', this.user)
      })
      .catch(console.error)
  }

  handleBack = async () => {
    await this.props.router.push('/calendar')
  }

  handleSelectGroup = async (group) => {
    const { role } = this.state.currentClass

    if (
      group.type === 'office' ||
      role === 'Professor' ||
      role === 'TA'||
      group.type === 'discussion'
    ) {
      // you are popped off the waiting queue or you are a TA
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
      <>
        <BroadcastModal />
        <Button
          color="teal"
          content="Modify Discussions"
          fluid
          style={{ fontSize: '1vw', marginTop: '2%' }}
          onClick={() => {
            this.setState({ clicked: 'inline' })
          }}
        />
      </>
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
          api.deleteGroup(this.classId, group.id).then(() => {
            this.fetchAllGroups()
            EventEmitter.publish('classGroupSetChanged', this.classId)
          })
        }
      >
        <Icon name="delete" color="red" />
      </Button>
    )
  }

  /*handleCreateTAOffice = async (group) => {
    console.log('handlecreatefire')
    if (
      this.state.allGroups.filter((check) => check.name === group.name)
        .length === 0
    ) {
      console.log(this.state.allGroups)
      const groupData = await api.postGroup(
        group.classId,
        group.name,
        group.type,
        group.userId
      )
      EventEmitter.publish('classGroupSetChanged', this.classId)
      this.fetchAllGroups()
    } else {
      console.log('groupexists')
    }
  }*/
  
  handleCreateGroup = async (group) => {
    const groupData = await api.postGroup(
      this.classId,
      group.name,
      group.type,
      this.user.id
    )
    EventEmitter.publish('classGroupSetChanged', this.classId)
    await this.handleSelectGroup(groupData)
    this.fetchAllGroups()
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

  getTAInDiscussion(group) {
    return group.users
      .filter((user) => user.role !== 'Student')
      .map((u) => (
        <Label color="teal" size="tiny" style={{ marginTop: '5%' }}>
          <Icon name="graduation cap" /> {u.firstName}
          {/* <Label.Detail>{u.role}</Label.Detail> */}
        </Label>
      ))
  }

  getListItemStyle(group) {
    const unClickedGroupsStyle = {
      fontSize: '.8vw',
      textAlign: 'left',
      width: '90%',
      marginBottom: '2%',
      minWidth: '41px',
      display: 'inline-block',
    }

    const clickedGroupsStyle = {
      fontSize: '.8vw',
      textAlign: 'left',
      width: '90%',
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
      <div style={{ paddingLeft: 20 }} style = {{ width: '100%' }}>
        <List relaxed selection verticalAlign="middle" style = {{ width: '100%' }}>
          {this.state.allGroups
            .filter((group) => group.type === 'office')
            .map((group) => (
              <List.Item
                key={`${group.name}`}
                onClick={() => {
                  if (this.state.currentClass.role === 'Student') {
                    EventEmitter.publish('openOfficeAccessModal', true)
                  } else if (this.state.currentGroup.id !== group.id) {
                    this.handleSelectGroup(group)
                  }
                }}
                style={this.getListItemStyle(group)}
              >
                <List.Icon name="graduation cap" />
                <List.Content style = {{ width: '100%' }}>
                  <List.Header as="a" style = {{ width: '100%' }}>
                    {group.name + ' (' + group.users.length + ')'}
                  </List.Header>
                </List.Content>
                {this.showInviteButton(group)}
              </List.Item>
            ))}
        </List>
      </div>
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
              fontSize: '1.2vw',
              textAlign: 'left',
              width: '75%',
              marginBottom: '2%',
              minWidth: '41px',
            }}
            onClick={this.handleBack}
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
                      {this.state.allGroups
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
                                <List.Header as="a">
                                  {group.name + ' (' + group.users.length + ')'}
                                </List.Header>
                                {this.getTAInDiscussion(group)}
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
                      {this.state.allGroups
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
                              <List.Header as="a">
                                {group.name + ' (' + group.users.length + ')'}
                              </List.Header>
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
      <div style={{ height: '100%', marginLeft: '2.5%' }}>
        <Button.Group
          size="huge"
          style={{ marginBottom: 12, width: '100%' }}
          fluid
        >
          <Button
            compact
            content={this.state.currentClass.name}
            style={{
              fontSize: '1.5vw',
              textAlign: 'left',
              width: '75%',
              marginBottom: '2%',
              minWidth: '41px',
            }}
          />
        </Button.Group>
        <Label
          size="massive"
          style={{
            fontSize: '1vw',
            textAlign: 'center',
            width: '100%',
            marginBottom: '4%',
            minWidth: '41px',
          }}
        >
          You are currently in a TA's office. Please click the leave call button
          to join another group.
        </Label>
      </div>
    )
  }

  render() {
    if (!this.state.isMounted) {
      return null
    }

    if (this.state.toRejoin) {
      const group = JSON.parse(localStorage.getItem('lastCallEntered'))

      confirmAlert({
        title: 'Rejoin Call',
        message:
          'It appears you did not leave your last call. Would you like to rejoin it?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              this.joinGroup(group)
              this.setState(
                {
                  toRejoin: false,
                },
                () => {
                  EventEmitter.publish('TARejoinCall')
                }
              )
            },
          },
          {
            label: 'No',
            onClick: () => {
              localStorage.removeItem('lastCallEntered')
              this.setState({
                toRejoin: false,
              })
            },
          },
        ],
      })
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
            onLeave={this.leaveGroup}
            name={this.user.firstName + ' ' + this.user.lastName}
            profile={this.user.profile}
          />
        )}
        <OfficeAccessModal />
        <AccessDeniedModal />
        <UserInviteModal />
        <FeedbackModal />
        <ReceiveInviteModal onJoin={this.handleSelectGroup} />
        <GroupJoinRequestModal />
        <WaitingForRequestApprovalModal />
        <NotificationContainer />
        <WaitingForNewLeaderModal userId={this.user.id} />
        <ReceiveBroadcastModal userId={this.user.id} />
      </Layout>
    )
  }
}
export default AuthRequired(withRouter(ClassPage))
