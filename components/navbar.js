import react from 'react'
import { Menu } from 'semantic-ui-react'

function Navbar() {
  return (
    <Menu size="large" borderless>
      <Menu.Item header>Mercury</Menu.Item>
      <Menu.Item>Dashboard</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Logout</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar
