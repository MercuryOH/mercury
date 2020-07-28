import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { Button, Accordion, List } from 'semantic-ui-react'
import { AuthRequired } from '../../components/authProvider'
import Queue from '../../components/queue/queue'
import * as api from '../../util/mercuryService'
import CreateGroupModal from '../../components/createGroupModal'

function ClassPage() {
  const router = useRouter()
  const [groups, setGroups] = useState([])
  const { classId } = router.query

  useEffect(() => {
    if (!classId) return

    api
      .getGroups(classId)
      .then((groups) => setGroups(groups))
      .catch(console.error)
  }, [classId])

  return (
    <Layout
      left={
        <div style={{ height: '100%' }}>
          <Button.Group size="huge" style={{ marginBottom: 20 }} fluid>
            <Button icon="angle left" content="CS-101" />
            <Button icon="setting" />
          </Button.Group>
          <Accordion
            fluid
            exclusive={false}
            defaultActiveIndex={[0, 1]}
            panels={[
              {
                key: 'discussions',
                title: 'Discussions',
                content: {
                  content: (
                    <div style={{ paddingLeft: 20 }}>
                      <List relaxed>
                        {groups
                          .filter((group) => group.type === 'discussion')
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
                title: 'Private Groups',
                content: {
                  content: (
                    <div style={{ paddingLeft: 20 }}>
                      <List relaxed>
                        {groups
                          .filter((group) => group.type === 'group')
                          .map((group) => (
                            <List.Item key={`private_group_${group.id}`}>
                              <List.Icon name="lock" />
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
            <CreateGroupModal />
          </div>
        </div>
      }
      right={<Queue />}
    >
      <Button.Group>
        <Button icon={'headphones'} content="Join Meeting" primary />
      </Button.Group>
    </Layout>
  )
}

export default AuthRequired(ClassPage)
