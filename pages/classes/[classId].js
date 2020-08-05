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
  const [users, setUsers] = useState([])
  const router = useRouter()
  const [currGroup, setCurrGroup] = useState('bs')
  const [classUsers, setClassUsers] = useState([])
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
    api
      .getMe()
      .then((users) => setUsers(users))
      .catch(console.error)
  })

  var inclass = ''
  var userids = []

  const fetchCurrentClass = async () => {
    var test = api.getClassNG(classId)
    if (test === null) {
      await router.push('/login')
    } else {
      test
        .then((currentClass) => setCurrentClass(currentClass))
        .catch(console.error)
    }
  }

  useEffect(() => {
    api
      .getClassUsers(classId)
      .then((classUsers) => setClassUsers(classUsers))
      .catch(console.error)
    classUsers.forEach((c) => {
      userids.push(c.UserId)
      inclass = userids.includes(users.id)
      //console.log(userids)
      //console.log(users.id)
      //console.log(inclass)
    })
  }, [])

  const checkUser = async () => {
    if (inclass === 'false') {
      await router.push('/calendar')
    }
  }

  useEffect(() => {
    if (!classId) return
    fetchCurrentClass()
    checkUser()
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
      .then(({ token }) => {
        setVonageCred(null)
        setVonageCred({ sessionId: group.sessionId, token })
      })
      .catch(console.error)
  }

  const handleJoinTA = (group) => {
    handleSelectGroup(group)
  }

  function getRole() {
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
      return <CreateGroupModal onCreate={handleCreateGroup} />
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

  function showOffice() {
    if (getRole() !== 'Student' && getRole() !== null) {
      return (
        <div style={{ paddingLeft: 20 }}>
          <List relaxed>
            {currentClass.Groups.filter((group) => group.type === 'office').map(
              (group) => (
                <List.Item
                  key={`office`}
                  onClick={() => {
                    handleSelectGroup(group)
                    changeColor(group.id)
                  }}
                  style={
                    currGroup == group.id && vonageCred !== null
                      ? clickedGroupsStyle
                      : unClickedGroupsStyle
                  }
                >
                  <List.Icon name="graduation cap" />
                  <List.Content>
                    <List.Header as="a">TA Office</List.Header>
                  </List.Content>
                </List.Item>
              )
            )}
          </List>
        </div>
      )
    }
    return null
  }
  const handleCreateGroup = async (group) => {
    await api.postGroup(classId, group.name, group.type)

    fetchCurrentClass()
  }

  const changeColor = (groupId) => {
    setCurrGroup(groupId)
  }

  const unClickedGroupsStyle = {
    fontSize: '.8vw',
    textAlign: 'left',
    width: '75%',
    marginBottom: '2%',
    minWidth: '41px',
  }
  const clickedGroupsStyle = {
    fontSize: '.8vw',
    textAlign: 'left',
    width: '75%',
    marginBottom: '2%',
    minWidth: '41px',
    background: '#e0e1e2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
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
                            onClick={() => {
                              handleSelectGroup(group)
                              changeColor(group.id)
                            }}
                            style={
                              currGroup == group.id && vonageCred !== null
                                ? clickedGroupsStyle
                                : unClickedGroupsStyle
                            }
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
                            onClick={() => {
                              handleSelectGroup(group)
                              changeColor(group.id)
                            }}
                            style={
                              currGroup == group.id && vonageCred !== null
                                ? clickedGroupsStyle
                                : unClickedGroupsStyle
                            }
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
            {getButtonToDisplay()}
          </div>
        </div>
      }
      right={<Queue onJoin={handleJoinTA} />}
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
