import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Menu, Image, Label, Dropdown } from 'semantic-ui-react'
import * as api from '../util/mercuryService'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

function Navbar() {
  const [users, setUsers] = useState([])
  const router = useRouter()

  var name = ''
  var email = ''

  useEffect(() => {
    api
      .getMe()
      .then(function (users) {
        setUsers(users)
      })
      .catch(console.error)
  })

  if (users) {
    name = users.firstName + ' ' + users.lastName
    email = users.email
  }

  return (
    <Menu size="massive" style={{ marginBottom: 0, zIndex: 1 }} borderless>
      <Menu.Item header>Mercury</Menu.Item>
      <Menu.Menu position="right">
        <ProfileContainer>
          <Label>Fall 2020</Label>
          <Dropdown
            icon={
              <Image
                src="https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                style={{ marginLeft: 10, marginRight: 10 }}
                avatar
              />
            }
          >
            <Dropdown.Menu>
              <Dropdown.Item text={name} />
              <Dropdown.Item text={email} />
              <Dropdown.Item
                text="Logout"
                onClick={() => router.push('/login')}
              />
            </Dropdown.Menu>
          </Dropdown>
        </ProfileContainer>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar
