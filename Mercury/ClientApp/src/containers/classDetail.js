import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, Accordion, List } from 'semantic-ui-react'
import * as api from '../services/api'
import * as rt from '../services/realtime'
import { useAuth0 } from '@auth0/auth0-react'

import Layout from '../components/layout'
import Queue from '../components/Queue'
import CreateGroupModal from '../components/createGroupModal'
import CreateDiscussionModal from '../components/createDiscussionModal'
import ScreenContainer from '../components/opentok/screenContainer'

function ClassDetail() {
  const { classId } = useParams()
  const [currentClass, setCurrentClass] = useState({
    id: '',
    name: '',
    calendarId: '',
    color: '',
    role: '',
    groups: [],
  })
  const { user } = useAuth0()
  const [vonageCred, setVonageCred] = useState(null)

  const getCurrentClass = () => {
    api
      .getClass(classId)
      .then((currentClass) => setCurrentClass(currentClass))
      .catch(console.error)
  }

  const joinGroup = (group) => {
    api
      .postGroupToken(currentClass.id, group.id)
      .then(({ token }) => {setVonageCred({ sessionId: group.sessionId, token})})
      .catch(console.error)

    console.log(`${currentClass.id}`)
    console.log(`${currentClass.groups}`)
  }
        /*if (this.state.currentGroup.id !== '') {
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
  }*/

  const leaveGroup = () => {
    setVonageCred(null)
  }

  useEffect(() => {
    getCurrentClass()
  }, [])

  const handleCreateGroup = (group) => {
    api
      .postGroup(currentClass.id, group)
      .then(() => getCurrentClass())
      .catch(console.error)
  }

  return (
    <Layout
      left={
        <div style={{ width: '100%', height: '100%' }}>
          <Link to="/calendar">
            <Button
              fluid
              size="huge"
              icon="angle left"
              content={currentClass.name}
              style={{
                fontSize: '1.5vw',
                textAlign: 'left',
                width: '75%',
                marginBottom: '2%',
                minWidth: '41px',
              }}
            />
          </Link>
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
                        {currentClass.groups
                          .filter((group) => group.type === 'Discussion')
                          .map((group) => (
                            <List.Item key={`discussion_${group.id}`} onClick = {joinGroup.bind(this, group)}>
                              <List.Icon name="sound" />
                              <List.Content>
                                <List.Header as="a">{group.name}</List.Header>
                              </List.Content>
                            </List.Item>
                          ))}
                      </List>
                    </div>
                  ),
                },
              },
              {
                key: 'private-groups',
                title: 'Private groups',
                content: {
                  content: (
                    <div
                      style={{ paddingLeft: 20, height: 200, overflow: 'auto' }}
                    >
                      <List relaxed selection>
                        {currentClass.groups
                          .filter((group) => group.type === 'Group')
                          .map((group) => (
                            <List.Item key={`private_group_${group.id}`} onClick = {joinGroup.bind(this, group)}>
                              <List.Icon name="sound" />
                              <List.Content>
                                <List.Header as="a">{group.name}</List.Header>
                              </List.Content>
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
            {currentClass.role === 'Student' ? (
              <CreateGroupModal onChange={handleCreateGroup} />
            ) : (
              <CreateDiscussionModal onChange={handleCreateGroup} />
            )}
          </div>
        </div>
      }
      right={<Queue classId={currentClass.id} />}
    >
    {vonageCred && (
    <ScreenContainer
            style={{ width: '100%', maxHeight: '75vh' }}
            sessionId={vonageCred.sessionId}
            token={vonageCred.token}
            onLeave={leaveGroup.bind(this)}
            //name={this.user.firstName + ' ' + this.user.lastName}
            name = {user.name}
            user = {user}
          />
        )}
      {JSON.stringify(currentClass, undefined, 2)}
      <Button content="Join" onClick={() => rt.joinQueue(currentClass.id)} />
    </Layout>
  )
}

export default ClassDetail
