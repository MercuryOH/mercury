import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, Accordion, List } from 'semantic-ui-react'
import * as api from '../services/api'
import * as rt from '../services/realtime'

import Layout from '../components/layout'
import Queue from '../components/Queue'
import CreateGroupModal from '../components/createGroupModal'
import CreateDiscussionModal from '../components/createDiscussionModal'

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

  const getCurrentClass = () => {
    api
      .getClass(classId)
      .then((currentClass) => setCurrentClass(currentClass))
      .catch(console.error)
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
                            <List.Item key={`discussion_${group.id}`}>
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
                            <List.Item key={`private_group_${group.id}`}>
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
      {JSON.stringify(currentClass, undefined, 2)}
      <Button content="Join" onClick={() => rt.JoinQueue(currentClass.id)} />
    </Layout>
  )
}

export default ClassDetail
