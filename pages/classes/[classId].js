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
  const [groups, setGroups] = useState([])
  const [classes, setClasses] = useState([])
  const [currentClass, setCurrentClass] = useState({
    id: '',
    name: 'bob',
    Groups: [],
  })
  const [vonageCred, setVonageCred] = useState(null)
  const { classId } = router.query

  useEffect(() => {
    if (!classId) return

    api
      .getClassNG(classId)
      .then((currentClass) => setCurrentClass(currentClass))
      .catch(console.error)
  }, [classId])

  useEffect(() => {
    api
      .getClasses()
      .then((classes) => setClasses(classes))
      .catch(console.error)
  }, [])

  const handleBack = async () => {
    await router.push('/calendar')
  }

  const handleSelectGroup = (group) => {
    api
      .postGroupToken(classId, group.id)
      .then(({ token }) => setVonageCred({ sessionId: group.sessionId, token }))
      .catch(console.error)
  }

function getRole(){
  let userRole = null

    classes.forEach((row) => {
      let { id, role } = row
      if (currentClass.id === Number(id)) {
        userRole = role
      }
    })

    return userRole
}

  function getButtonToDisplay() {
    

    if (getRole() === null) {
      return null
    }
    
    if (getRole() === 'Student') {
      return <CreateGroupModal />
    } else {
      return (
        <Button
          color="teal"
          content="Modify Discussions"
          fluid
          style={{ fontSize: '1vw' }}
        />
      )
    }
  }

  function showOffice(){
    if (getRole() === null) {
      return null
    }
    
    if (getRole() === 'Student'||getRole() === null) {
      return null
    } else {
      return (
        <div style={{ paddingLeft: 20 }}>
            <List relaxed>
              
            {currentClass.Groups.filter(
                          (group) => group.type === 'office'
                        ).map((group) => (
                          <List.Item
                            key={`office`}
                            onClick={() => handleSelectGroup(group)}
                            style={{
                              fontSize: '.8vw',
                              textAlign: 'left',
                              width: '75%',
                              marginBottom: '2%',
                              minWidth: '41px',
                            }}
                          >
                            <List.Icon name="graduation cap" />
                            <List.Content>
                              <List.Header as="a">TA Office</List.Header>
                            </List.Content>
                          </List.Item>
                        ))}
             
            </List>
          </div>
      )
    }
  }

  return (
    <Layout
      left={
        <div style={{ height: '100%', marginLeft: '2.5%' }}>
          <Button.Group
            size="huge"
            style={{ marginBottom: 12, width: '100%' }}
            fluid
          >
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
          {showOffice()}
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
                        {currentClass.Groups.filter(
                          (group) => group.type === 'discussion'
                        ).map((group) => (
                          <List.Item
                            key={`discussion_${group.id}`}
                            onClick={() => handleSelectGroup(group)}
                            style={{
                              fontSize: '.8vw',
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
                        {currentClass.Groups.filter(
                          (group) => group.type === 'group'
                        ).map((group) => (
                          <List.Item
                            key={`private_group_${group.id}`}
                            onClick={() => handleSelectGroup(group)}
                            style={{
                              fontSize: '.8vw',
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
            {/* <CreateGroupModal /> */}
            {getButtonToDisplay()}
          </div>
        </div>
      }
      right={<Queue />}
    >
      {vonageCred && (
        <Vonage
          sessionId={vonageCred.sessionId}
          token={vonageCred.token}
          onLeave={() => setVonageCred(null)}
        />
      )}
    </Layout>
  )
}

export default AuthRequired(ClassPage)
