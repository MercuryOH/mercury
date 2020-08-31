import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Accordion, List, Label } from 'semantic-ui-react'
import * as api from '../services/api'
import * as rt from '../services/realtime'
import { EventEmitter } from '../components/util/EventEmitter'

import Layout from '../components/layout'
import Queue from '../components/queue'
import CreateGroupModal from '../components/createGroupModal'
import CreateDiscussionModal from '../components/createDiscussionModal'
import ScreenContainer from '../components/opentok/screenContainer'
import OfficeAccessModal from '../components/officeAccessModal'

class ClassDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      withTa: false,
      clicked: 'none',
      currentGroup: { id: '', name: '' },
      currentClass: {
        // id: '',
        // name: '',
        // //groups: [],
        // users: [],
        // role: 'Student',
        id: '',
        name: '',
        calendarId: '',
        color: '',
        role: '',
        groups: [],
      },
      vonageCred: null,
      // isMounted: false,
      // allGroups: [],
      // toRejoin: false, // activate rejoin option confirm alert
    }

    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    // EventEmitter.subscribe('clearLeftSide', () => {
    //   this.setState({ withTa: true })
    // })
    // EventEmitter.subscribe('joinPrivateGroupOnApproval', (group) => {
    //   EventEmitter.publish('removeWaitingForRequestApprovalModal')
    //   this.joinGroup(group)
    // })
    // EventEmitter.subscribe('notifyJoinRequestDeclined', (group) => {
    //   NotificationManager.info(
    //     `Your Request To Join ${group.name} Was Declined`
    //   )
    //   EventEmitter.publish('removeWaitingForRequestApprovalModal')
    // })
    // EventEmitter.subscribe('fetchGroups', () => {
    //   this.fetchAllGroups()
    // })
    // EventEmitter.subscribe('createNotification', (msg) => {
    //   NotificationManager.info(msg)
    // })
    // EventEmitter.subscribe('createTAOffice', (classUser) => {
    //   this.fetchAllGroups()
    //   this.handleCreateTAOffice({
    //     classId: classUser.classId,
    //     name: this.user.firstName + ' ' + this.user.lastName + "'s Office",
    //     type: 'office',
    //     userId: classUser.userId,
    //   })
    // })
    // EventEmitter.subscribe('leaveCallOnError', () => {
    //   this.leaveGroup()
    // })
  }

  componentDidMount() {
    const classId = this.props.match.params.classId
    if (!classId) return
    this.classId = classId

    this.getCurrentClass()
  }

  getCurrentClass = () => {
    api
      .getClass(this.classId)
      .then((currentClass) => this.setState({ currentClass }))
      .catch(console.error)
  }

  joinGroup = (group) => {
    api
      .postGroupToken(this.state.currentClass.id, group.id)
      .then(({ token }) => {
        if (this.state.currentGroup.id !== '') {
          //the user is currently in a call, leave the call first
          this.leaveGroup()
          // if (group.type === 'office') {
          //   // this case only happens when the user is leaving a private group for the TA office
          //   // do not trigger the callOver event in this case
          //   this.leaveGroupForTAOffice()
          // } else {
          //   this.leaveGroup()
          // }
        }

        this.setState({
          vonageCred: { sessionId: group.sessionId, token },
          currentGroup: group,
        })
      })
      .catch(console.error)
  }

  leaveGroup = () => {
    // api
    //   .deleteGroupUser(
    //     this.state.currentClass.id,
    //     this.state.currentGroup.id,
    //     this.user.id
    //   )
    //   .catch(console.error)

    // this.fetchAllGroups() // re-fetch current groups
    // EventEmitter.publish('classGroupSetChanged', this.classId) // tell everyone to re-fetch their groups in the class
    // EventEmitter.publish('userLeaveGroup', this.state.currentGroup) // notify backend that you have left the call

    this.setState({
      // leave the call
      vonageCred: null,
      currentGroup: { id: '', name: '' },
      withTa: false,
    })
    // EventEmitter.publish('currentGroupChange', { id: '', name: '' }) // change current group
    // EventEmitter.publish('callOver', this.classId) // signal call over, which triggers feedback modal and curr student update on the queue
    // localStorage.removeItem('lastCallEntered')
  }

  handleCreateGroup = (group) => {
    api
      .postGroup(this.currentClass.id, group)
      .then(() => this.getCurrentClass())
      .catch(console.error)
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
      <div style={{ paddingLeft: 20 }}>
        <List relaxed selection verticalAlign="middle">
          {this.state.currentClass.groups
            .filter((group) => group.type === 'Office')
            .map((group) => (
              <List.Item
                key={`${group.name}`}
                onClick={() => {
                  if (this.state.currentClass.role === 'Student') {
                    EventEmitter.publish('openOfficeAccessModal', true)
                  }
                  // else if (this.state.currentGroup.id !== group.id) {
                  //   this.handleSelectGroup(group)
                  // }
                }}
                style={this.getListItemStyle(group)}
              >
                <List.Icon name="graduation cap" />
                <List.Content>
                  <List.Header as="a">
                    {group.name}
                    {/* {group.name + ' (' + group.users.length + ')'} */}
                  </List.Header>
                </List.Content>
                {/* {this.showInviteButton(group)} */}
              </List.Item>
            ))}
        </List>
      </div>
    )
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

  leftDisplay() {
    return this.state.withTa === false ? (
      <div style={{ width: '100%', height: '100%', marginLeft: '2.5%' }}>
        {/* <Button.Group
          size="huge"
          style={{ marginBottom: 12, width: '100%' }}
          fluid
        > */}
          <Link to="/calendar" style={{ marginBottom: 12, width: '100%' }}>
            <Button
              compact
              icon="angle left"
              content={this.state.currentClass.name}
              style={{
                fontSize: '1.5vw',
                textAlign: 'left',
                width: '100%',
                marginBottom: '2%',
                minWidth: '41px',
              }}
            />
          </Link>
        {/* </Button.Group> */}
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
                        .filter((group) => group.type === 'Discussion')
                        .map((group) => (
                          <>
                            <List.Item
                              key={`discussion_${group.id}`}
                              onClick={() => {
                                if (this.state.currentGroup.id !== group.id) {
                                  // this.handleSelectGroup(group)
                                  this.joinGroup(group)
                                }
                              }}
                              style={this.getListItemStyle(group)}
                            >
                              <List.Icon name="sound" />
                              <List.Content>
                                <List.Header as="a">
                                  {group.name}
                                  {/* {group.name + ' (' + group.users.length + ')'} */}
                                </List.Header>
                              </List.Content>
                              {/* {this.showInviteButton(group)} */}
                            </List.Item>
                            {/* {this.getDeleteButton(group)} */}
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
                        .filter((group) => group.type === 'Group')
                        .map((group) => (
                          <List.Item
                            key={`private_group_${group.id}`}
                            onClick={() => {
                              if (this.state.currentGroup.id !== group.id) {
                                // this.handleSelectGroup(group)
                                this.joinGroup(group)
                              }
                            }}
                            style={this.getListItemStyle(group)}
                          >
                            <List.Icon name="lock" />
                            <List.Content>
                              <List.Header as="a">
                                {group.name}
                                {/* {group.name + ' (' + group.users.length + ')'} */}
                              </List.Header>
                            </List.Content>
                            {/* {this.showInviteButton(group)} */}
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
    return (
      <Layout
        left={this.leftDisplay()}
        right={<Queue classId={this.state.currentClass.id} />}
      >
        {this.state.vonageCred && (
          <ScreenContainer
            style={{ width: '100%', maxHeight: '75vh' }}
            sessionId={this.state.vonageCred.sessionId}
            token={this.state.vonageCred.token}
            onLeave={this.leaveGroup}
            //name={this.user.firstName + ' ' + this.user.lastName}
            name={'yeet'}
          />
        )}
        {JSON.stringify(this.state.currentClass, undefined, 2)}
        <Button
          content="Join"
          onClick={() => rt.joinQueue(this.state.currentClass.id)}
        />
        <OfficeAccessModal />
      </Layout>
    )
  }
}

export default withRouter(ClassDetail)
