import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Menu, Image, Label, Dropdown } from 'semantic-ui-react'
import { useAuth } from './authProvider'
import { GoogleLogout } from 'react-google-login'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

function Navbar() {
  const router = useRouter()
  const { user, logout } = useAuth()

  const logoutUser = (response) => {
    logout()
  }

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  },[])

  return ( !user ? null:
    <Menu size="massive" style={{ marginBottom: 0, zIndex: 1 }} borderless>
      <Menu.Item header>Mercury</Menu.Item>
      <Menu.Menu position="right">
        <ProfileContainer>
          <Label>Fall 2020</Label>
          <Dropdown
            icon={
              <Image
                src={user.profile}
                style={{ marginLeft: 10, marginRight: 10 }}
                avatar
              />
            }
          >
            <Dropdown.Menu>
              <Dropdown.Item
                text={user && `${user.firstName} ${user.lastName}`}
              />
              <Dropdown.Item text={user && user.email} />
              <Dropdown.Item>
              <GoogleLogout
                clientId="1019939739333-mi49g41jn4u9v50nqqd538vsfpl3jf9s.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logoutUser}
              >
              </GoogleLogout>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ProfileContainer>
      </Menu.Menu>
    </Menu>

  )
}

export default Navbar
