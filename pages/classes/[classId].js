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
  //const [classes, setClasses] = useState([])
  const { classId } = router.query

  const handleBack = () => {
      router.push('/calendar')
  }

  useEffect(() => {
    if (!classId) return

    api
      .getGroups(classId)
      .then((groups) => setGroups(groups))
      .catch(console.error)
  }, [classId])

  // useEffect(() => {
  //   api
  //     .getClasses()
  //     .then((classes) => setClasses(classes))
  //     .catch(console.error)
  // })

  // function getClassName(classList) {
  //   classList.forEach((c) => {
  //     if (c.id == classId) {
  //       console.log(c.name)
  //       return c.name
  //     }
  //   })
  //   return ''
  // }

  return (
    <Layout
      left={
        <div style={{ height: '100%' }}>
          <Button.Group
            size="huge"
            style={{ marginBottom: 12, width: '100%' }}
            fluid
          >
            <Button
              compact
              icon="angle left"
              content="Class.name"
              style={{
                fontSize: '1.5vw',
                textAlign: 'left',
                width: '75%',
                marginBottom: '2%',
                minWidth: '41px',
              }}
              onClick={handleBack}
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
                    <div style={{ paddingLeft: 20 }}>
                      <List relaxed>
                        {groups
                          .filter((group) => group.type === 'discussion')
                          .map((group) => (
                            <List.Item
                              key={`discussion_${group.id}`}
                              style={{
                                fontSize: '1vw',
                                textAlign: 'left',
                                width: '75%',
                                marginBottom: '2%',
                                minWidth: '41px',
                              }}
                            >
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
                            <List.Item
                              key={`private_group_${group.id}`}
                              style={{
                                fontSize: '1vw',
                                textAlign: 'left',
                                width: '75%',
                                marginBottom: '2%',
                                minWidth: '41px',
                              }}
                            >
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
        <Button
          icon={'headphones'}
          content="Join Meeting"
          primary
          style={{
            fontSize: '.7vw',
            textAlign: 'left',
            width: '15%',
            minWidth: '41px',
          }}
        />
      </Button.Group>
    </Layout>
  )
}

export default AuthRequired(ClassPage)
