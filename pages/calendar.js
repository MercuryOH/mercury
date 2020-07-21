import React from 'react'
import LargeLabel from '../components/largeLabel'
import DropDown from '../components/dropDown'
import Layout from '../components/layout'
import { Header, Label } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
    },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
    },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg',
    },
  },
]

function Calendar() {
  return (
    <Layout
    left=
    <div>
      <LargeLabel
        content = {<p>Classes</p>}>
      </LargeLabel>
      <DropDown
        content = {<p>Students</p>}>
      </DropDown>
      <DropDown
        content = {<p>TA</p>}>
      </DropDown>
    </div>
    right={<p>CALENDAR</p>}>
      <Header>Hello</Header>
      <button>Hello</button>
    </Layout>
  )
}

export default Calendar
