import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

function Navbar() {
  const { user, logout } = useAuth0()

  return (
    <Menu size="massive" style={{ marginBottom: 0, zIndex: 1 }} borderless>
      <Menu.Item header>Mercury</Menu.Item>
      <Menu.Menu position="right">
        <ProfileContainer>
          <Dropdown
            icon={
              <Image
                src={user.picture}
                style={{ marginLeft: 10, marginRight: 10 }}
                avatar
              />
            }
          >
            <Dropdown.Menu>
              <Dropdown.Item text={user.name} />
              <Dropdown.Item text="Logout" onClick={logout} />
            </Dropdown.Menu>
          </Dropdown>
        </ProfileContainer>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar
