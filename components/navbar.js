import React from 'react'
import styled from 'styled-components'
import { Menu, Image, Label, Dropdown } from 'semantic-ui-react'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

function Navbar() {
  return (
    <Menu size="massive" style={{ marginBottom: 0 }} borderless>
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
              <Dropdown.Item text="Name" />
              <Dropdown.Item text="Email" />
              <Dropdown.Item text="Logout" />
            </Dropdown.Menu>
          </Dropdown>
        </ProfileContainer>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar
