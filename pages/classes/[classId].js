import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Layout from '../../components/layout'
import { Button, Accordion, List } from 'semantic-ui-react'
import { AuthRequired, useAuth } from '../../components/authProvider'
import Queue from '../../components/queue/queue'
import * as api from '../../util/mercuryService'
import CreateGroupModal from '../../components/createGroupModal'
import ModifyDiscussionModal from '../../components/modifyDiscussionModal'

const Vonage = dynamic(() => import('../../components/vonage'), {
  ssr: false,
})

function ClassPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [currentGroup, setCurrentGroup] = useState({ id: '', name: '' })
  const [currentClass, setCurrentClass] = useState({
    id: '',
    name: '',
    groups: [],
    users: [],
    role: 'Student',
  })
  const [vonageCred, setVonageCred] = useState(null)
  const { classId } = router.query
  const plusIcon = <List.Icon name="user plus" size="med" />
  const noPlusIcon = <div></div>

  const fetchCurrentClass = () => {
    api
      .getClass(classId)
      .then((currentClass) => setCurrentClass(currentClass))
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
  }, [classId])

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

  function getButtonToDisplay() {
    return currentClass.role === 'Student' ? (
      <CreateGroupModal onCreate={handleCreateGroup} />
    ) : (
      <ModifyDiscussionModal onCreate={handleCreateGroup} />
    )
  }

  function showOffice() {
    return (
      (currentClass.role !== 'Student' || currentGroup.type === 'office') && (
        <div style={{ paddingLeft: 20 }}>
          <List relaxed selection>
            {currentClass.groups
              .filter((group) => group.type === 'office')
              .map((group) => (
                <List.Item
                  key={`office`}
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
    await api.postGroup(classId, group.name, group.type)

    fetchCurrentClass()
  }

  function showInviteButton(group) {
    return currentGroup.id == group.id && vonageCred !== null
      ? plusIcon
      : noPlusIcon
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
                                currentGroup.id == group.id &&
                                vonageCred !== null
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
      }
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
    </Layout>
  )
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

export default AuthRequired(ClassPage)
