import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, Accordion, List } from 'semantic-ui-react'
import * as api from '../services/api'
import Layout from '../components/layout'
import CreateGroupModal from '../components/createGroupModal'

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
        <div style={{ height: '100%', marginLeft: '2.5%' }}>
          <Button.Group
            fluid
            size="huge"
            style={{ marginBottom: 12, width: '100%' }}
          >
            <Link to="/calendar">
              <Button
                compact
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
          </Button.Group>
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
                            <>
                              <List.Item key={`discussion_${group.id}`}>
                                <List.Icon name="sound" />
                                <List.Content>
                                  <List.Header as="a">{group.name}</List.Header>
                                </List.Content>
                              </List.Item>
                            </>
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
                            <>
                              <List.Item key={`discussion_${group.id}`}>
                                <List.Icon name="sound" />
                                <List.Content>
                                  <List.Header as="a">{group.name}</List.Header>
                                </List.Content>
                              </List.Item>
                            </>
                          ))}
                      </List>
                    </div>
                  ),
                },
              },
            ]}
          />
          <CreateGroupModal onChange={handleCreateGroup} />
        </div>
      }
    >
      {JSON.stringify(currentClass, undefined, 2)}
    </Layout>
  )
}

export default ClassDetail
