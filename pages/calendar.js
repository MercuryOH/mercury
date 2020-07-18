import React from 'react'
import Layout from '../components/layout'
import { Header, Dropdown } from 'semantic-ui-react'

function Calendar() {
  return (
    <Layout
      left={
        <Dropdown
          text="Filter"
          icon="filter"
          floating
          labeled
          button
          className="icon"
        >
          <Dropdown.Menu>
            <Dropdown.Header icon="tags" content="Filter by tag" />
            <Dropdown.Divider />
            <Dropdown.Item icon="attention" text="Important" />
            <Dropdown.Item icon="comment" text="Announcement" />
            <Dropdown.Item icon="conversation" text="Discussion" />
          </Dropdown.Menu>
        </Dropdown>
      }
      right={<p>CALENDAR</p>}
    >
      <Header>CALENDAR</Header>
    </Layout>
  )
}

export default Calendar
