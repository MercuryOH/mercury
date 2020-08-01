import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Layout from '../../components/layout'
import { Button, Accordion, List } from 'semantic-ui-react'
import { AuthRequired } from '../../components/authProvider'
import Queue from '../../components/queue/queue'
import * as api from '../../util/mercuryService'
import CreateGroupModal from '../../components/createGroupModal'

const Vonage = dynamic(() => import('../../components/vonage'), {
  ssr: false,
})

function ClassPage() {
  const router = useRouter()
<<<<<<< HEAD
  const [groups, setGroups, classes, setClasses] = useState([])
=======
  const [groups, setGroups] = useState([])
  const [vonageCred, setVonageCred] = useState(null)
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9
  const { classId } = router.query

  useEffect(() => {
    if (!classId) return

    api
      .getGroups(classId)
      .then((groups) => setGroups(groups))
      .catch(console.error)
  }, [classId])

<<<<<<< HEAD
  useEffect(() => {
    api
      .getClasses()
      .then((classes) => setClasses(groups))
      .catch(console.error)
  }, [])

function getClassName(classList){
  var correctClass = ""
  classList.forEach((c) => {
    if (c.id === classId){
      correctClass = c.name
    }
  })
  return correctClass
}

//getClassName(classes)

=======
  const handleSelectGroup = (group) => {
    api
      .postGroupToken(classId, group.id)
      .then(({ token }) => setVonageCred({ sessionId: group.sessionId, token }))
      .catch(console.error)
  }
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9

  return (
    <Layout
      left={
        <div style={{ height: '100%' }}>
          <Button.Group size="huge" style={{ marginBottom: 12, width: '100%' }} fluid>
            <Button compact icon="angle left" content= "Class.name" style = {{fontSize: '1.5vw', textAlign: 'left', width: '75%', marginBottom: '2%', minWidth: '41px'}}/>
            <Button compact icon="setting" style = {{fontSize: '1.5vw', textAlign: 'center', width: '15%', marginBottom: '2%', minWidth: '14px'}}/>
          </Button.Group>
          <Accordion
            fluid
            exclusive={false}
            defaultActiveIndex={[0, 1]}
            style = {{fontSize: '1vw', textAlign: 'left', width: '100%', marginBottom: '2%', minWidth: '41px'}}
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
<<<<<<< HEAD
                            <List.Item key={`discussion_${group.id}`} style = {{fontSize: '1vw', textAlign: 'left', width: '75%', marginBottom: '2%', minWidth: '41px'}}>
=======
                            <List.Item
                              key={`discussion_${group.id}`}
                              onClick={() => handleSelectGroup(group)}
                            >
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9
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
<<<<<<< HEAD
                            <List.Item key={`private_group_${group.id}`} style = {{fontSize: '1vw', textAlign: 'left', width: '75%', marginBottom: '2%', minWidth: '41px'}}>
=======
                            <List.Item
                              key={`private_group_${group.id}`}
                              onClick={() => handleSelectGroup(group)}
                            >
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9
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
            <CreateGroupModal/>
          </div>
        </div>
      }
      right={<Queue />}
    >
<<<<<<< HEAD
      <Button.Group>
        <Button icon={'headphones'} content="Join Meeting" primary style = {{fontSize: '.7vw', textAlign: 'left', width: '15%', minWidth: '41px'}} />
      </Button.Group>
=======
      {vonageCred && (
        <Vonage
          sessionId={vonageCred.sessionId}
          token={vonageCred.token}
          onLeave={() => setVonageCred(null)}
        />
      )}
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9
    </Layout>
  )
}

export default AuthRequired(ClassPage)
