import React from 'react'
import LargeLabel from '../components/largeLabel'
import DropDown from '../components/dropDown'
import Layout from '../components/layout'
import ModalPop from '../components/modal'
import { Header, Label } from 'semantic-ui-react'
import JoinRequestModal from '../components/joinRequestModal'
import InviteReceiveModal from '../components/inviteReceiveModal'
import StudentInviteModal from '../components/StudentInviteModal'

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
      left={
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <LargeLabel content={<p>Classes</p>}></LargeLabel>
          <DropDown></DropDown>
          <ModalPop content={<p>Test</p>}></ModalPop>
          
          <JoinRequestModal content={'[student] requested to join your group'}></JoinRequestModal>
          <InviteReceiveModal content={'[student] invites you to join [group#]'}></InviteReceiveModal>
          <StudentInviteModal buttonText={'Invite'} placeholder={'Add student to your group...'}></StudentInviteModal>
        </div>
      }
    >
      <iframe
        src="https://calendar.google.com/calendar/b/1/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043&mode=WEEK&showTitle=1"
        style={{ border: '0' }}
        width={'100%'}
        height={'100%'}
        frameBorder={0}
        scrolling="no"
      ></iframe>
    </Layout>
  )
}

export default Calendar
