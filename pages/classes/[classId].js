import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Layout from '../../components/layout'
import { Button, Accordion, List, Icon } from 'semantic-ui-react'
import { AuthRequired, useAuth } from '../../components/authProvider'
import Queue from '../../components/queue/queue'
import * as api from '../../util/mercuryService'
import CreateGroupModal from '../../components/createGroupModal'
import StudentInviteModal from '../../components/studentInviteModal'
//import CreateDiscussionModal from '../../components/createDiscussionModal'
const CreateDiscussionModal = dynamic(() => import('../../components/createDiscussionModal'), {
  ssr: false,
})
const Vonage = dynamic(() => import('../../components/vonage'), {
  ssr: false,
})

function ClassPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [clicked, setClicked] = useState({clicked: 'none'})
  const [currentGroup, setCurrentGroup] = useState({ id: '', name: '' })
  const [currentClass, setCurrentClass] = useState({
    id: '',
    name: '',
    groups: [],
    users: [],
    role: 'Student',
  })
  const [vonageCred, setVonageCred] = useState(null)
  const [openInviteModal, setInviteModal] = useState(false)
  const { classId } = router.query
  const plusIcon = <List.Icon name="user plus" size="med" />
  const noPlusIcon = <div></div>

  const fetchCurrentClass = () => {
    api
      .getClass(classId)
      .then((c) => {
        const userRole = c.users.find((u) => u.id === user.id)
        if (!userRole) router.push('/calendar')

        setCurrentClass({ ...c, role: userRole.role })
      })
      .catch(console.error)
  }

  useEffect(() => {
    if (!classId) return

    api
      .getClass(classId)
      .then((c) => {
        const userRole = c.users.find((u) => u.id === user.id)
        if (!userRole) router.push('/calendar')

        setCurrentClass({ ...c, role: userRole.role })
      })
      .catch(console.error)
  })

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
    setCurrentGroup(group)
  }

  var buttonClicked = 'false'

  function getButtonToDisplay() {
    return currentClass.role === 'Student' ? (
      <CreateGroupModal onCreate={handleCreateGroup} />
    ) : currentClass.role === 'Professor' &&  clicked.clicked === 'none' ? (
      <Button
        color="teal"
        content="Modify Discussions"
        fluid
        style={{ fontSize: '1vw' }}
        onClick={() => {clicked.clicked = 'inline'}}
      />
    ) : (
      <>
      <CreateDiscussionModal id = 'createDiscussionModal' onCreate={handleCreateGroup}/>
      <Button
        color="teal"
        content="Exit Modify Discussions"
        fluid
        style={{ fontSize: '1vw', marginTop: '2%' }}
        onClick={() => {clicked.clicked = 'none'}}
      />
      </>
    )
  }

  function leftDisplay() {
    return currentClass.role === 'Student' ? (
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
                    <List relaxed selection>
                      {currentClass.groups
                        .filter((group) => group.type === 'discussion')
                        .map((group) => (
                          <List.Item
                            key={`discussion_${group.id}`}
                            onClick={() => {
                              if (currentGroup.id !== group.id) {
                                handleSelectGroup(group)
                                setCurrentGroup(group)
                              }
                            }}
                            style={
                              currentGroup.id == group.id && vonageCred !== null
                                ? clickedGroupsStyle
                                : unClickedGroupsStyle
                            }
                          >
                            <List.Icon name="sound" />
                            <List.Content>
                              <List.Header as="a">{group.name}</List.Header>
                            </List.Content>
                            {showInviteButton(group)}
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
                    <List relaxed selection>
                      {currentClass.groups
                        .filter((group) => group.type === 'group')
                        .map((group) => (
                          <List.Item
                            key={`private_group_${group.id}`}
                            onClick={() => {
                              if (currentGroup.id !== group.id) {
                                handleSelectGroup(group)
                                setCurrentGroup(group)
                              }
                            }}
                            style={
                              currentGroup.id == group.id && vonageCred !== null
                                ? clickedGroupsStyle
                                : unClickedGroupsStyle
                            }
                          >
                            <List.Icon name="lock" />
                            <List.Content>
                              <List.Header as="a">{group.name}</List.Header>
                            </List.Content>
                            {showInviteButton(group)}
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
    ) : (
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
                    <List relaxed selection>
                      {currentClass.groups
                        .filter((group) => group.type === 'discussion')
                        .map((group) => (
                          <>
                            <List.Item
                              key={`discussion_${group.id}`}
                              onClick={() => {
                                if (currentGroup.id !== group.id) {
                                  handleSelectGroup(group)
                                  setCurrentGroup(group)
                                }
                              }}
                              style={
                                currentGroup.id == group.id &&
                                vonageCred !== null
                                  ? clickedGroupsStyle
                                  : unClickedGroupsStyle
                              }
                          >
                            <List.Icon name="sound" />
                            <List.Content>
                              <List.Header as="a">{group.name}</List.Header>
                            </List.Content>
                            {showInviteButton(group)}
                          </List.Item>
                          <Button id = {`deletebutton${group.id}`} compact icon size = 'mini' floated = 'right'
                          style ={{
                            display: `${clicked.clicked}`,
                            fontSize: '.6vw',
                            textAlign: 'center',
                            width: '10%',
                            marginBottom: '2%',
                            minWidth: '10px',
                            backgroundColor: 'transparent',
                          }}
                          onClick={ () => {
                            api.deleteGroup(classId, group.id)
                          }}>
                            <Icon name = 'delete' color = 'red' />
                          </Button>
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
                  <div style={{ paddingLeft: 20 }}>
                    <List relaxed selection>
                      {currentClass.groups
                        .filter((group) => group.type === 'group')
                        .map((group) => (
                          <List.Item
                            key={`private_group_${group.id}`}
                            onClick={() => {
                              if (currentGroup.id !== group.id) {
                                handleSelectGroup(group)
                                setCurrentGroup(group)
                              }
                            }}
                            style={
                              currentGroup.id == group.id && vonageCred !== null
                                ? clickedGroupsStyle
                                : unClickedGroupsStyle
                            }
                          >
                            <List.Icon name="lock" />
                            <List.Content>
                              <List.Header as="a">{group.name}</List.Header>
                            </List.Content>
                            {showInviteButton(group)}
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
    )
  }

  function showOffice() {
    return (
      (currentClass.role !== 'Student' || currentGroup.type === 'office') && (
        <div style={{ paddingLeft: 20 }}>
          <List relaxed selection verticalAlign="middle">
            {currentClass.groups
              .filter((group) => group.type === 'office')
              .map((group) => (
                <List.Item
                  key={`office`}
                  onClick={() => {
                    if (currentGroup.id !== group.id) {
                      handleSelectGroup(group)
                      setCurrentGroup(group)
                    } else {
                      setInviteModal(true)
                    }
                  }}
                  style={
                    currentGroup.id == group.id && vonageCred !== null
                      ? clickedGroupsStyle
                      : unClickedGroupsStyle
                  }
                >
                  <List.Icon name="graduation cap" />
                  <List.Content>
                    <List.Header as="a">TA Office</List.Header>
                  </List.Content>
                  {showInviteButton(group)}
                </List.Item>
              ))}
          </List>
        </div>
      )
    )
  }

  const handleCreateGroup = async (group) => {
    await api.postGroup(classId, group.name, group.type).then((group) => {
      fetchCurrentClass()
      handleSelectGroup(group)
      setCurrentGroup(group)
    })
  }

  function showInviteButton(group) {
    return currentGroup.id == group.id && vonageCred !== null
      ? plusIcon
      : noPlusIcon
  }

  const handleInvite = () => {
    setInviteModal(false)
  }

  return (
    <Layout
      left={leftDisplay()}
      right={<Queue onJoin={handleJoinTA} currentGroup={currentGroup} />}
    >
      {vonageCred && (
        <Vonage
          sessionId={vonageCred.sessionId}
          token={vonageCred.token}
          onLeave={() => {
            setVonageCred(null)
            setCurrentGroup({ id: '', name: '' })
          }}
        />
      )}
      <StudentInviteModal isOpen={openInviteModal} onInvite={handleInvite} />
    </Layout>
  )
}

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

export default AuthRequired(ClassPage)
