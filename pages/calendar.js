import React, { useState, useEffect } from 'react'
import LargeLabel from '../components/largeLabel'
import DropDown from '../components/dropDown'
import Layout from '../components/layout'

import JoinRequestModal from '../components/joinRequestModal'
import InviteReceiveModal from '../components/inviteReceiveModal'
import StudentInviteModal from '../components/StudentInviteModal'

import { AuthRequired } from '../components/authProvider'

import * as api from '../util/mercuryService'

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
  const [classes, setClasses] = useState([])

  useEffect(() => {
    api
      .getClasses()
      .then((classes) => setClasses(classes))
      .catch(console.error)
  }, [])

  // const calendarIds = [
  //   'avnpisdeelacuaq11un5otu5k8@group.calendar.google.com',
  //   '4ctv2ua6npuegf05gh00iukd5g@group.calendar.google.com',
  // ]

  // var randomColor = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  const colors = ['D50000', 'F4511E', 'F6BF26', 'C0CA33', '0B8043', '009688']

  function mergeCal(classList) {
    var src = 'https://calendar.google.com/calendar/embed?mode=WEEK&showTitle=0'
    classList.forEach((c) => {
      //src = src + '&src=' + c.calendarId + "&color=#" + Math.floor(Math.random()*16777215).toString(16)
      src =
        src +
        '&src=' +
        c.calendarId +
        '&color=%23' +
        colors[(c.id - 2) % colors.length] //Is there a reason why class ids start from 2??
    })

    return src
  }

  return (
    <Layout
      left={
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <LargeLabel content={<p>Classes</p>}></LargeLabel>
          <DropDown></DropDown>

          <JoinRequestModal
            content={'[student] requested to join your group'}
          ></JoinRequestModal>
          <InviteReceiveModal
            content={'[student] invites you to join [group#]'}
          ></InviteReceiveModal>
          <StudentInviteModal
            buttonText={'Invite'}
            placeholder={'Add student to your group...'}
          ></StudentInviteModal>
          {/* <TaWaitingModal isYourTurn = {true}> </TaWaitingModal> */}
        </div>
      }
    >
      <iframe
        src={mergeCal(classes)}
        style={{ border: '0' }}
        width={'100%'}
        height={'100%'}
        frameBorder={0}
        scrolling="no"
      ></iframe>
    </Layout>
  )
}

export default AuthRequired(Calendar)
