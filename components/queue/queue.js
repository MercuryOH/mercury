import React, { Component } from 'react'
import { Label, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import QueueWebSocket from './queuews'
import * as api from '../../util/mercuryService'
import { AuthRequired } from '../../components/authProvider'
import YourTurnModal from '../yourTurnModal'
import TaWaitingModal from '../taWaitingModal'

const QueueDiv = styled.div`
  grid-gap: 2vh;
`

const QueueLabel = styled(Label)`
  text-align: center;
`

class Queue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayStudentsStyle: { display: 'grid' },
      iconToDisplay: 'caret square down outline',
      connection: new QueueWebSocket(this),
      studentsInQueue: [],
      me: {},
      classData: [],
      inQueue: false,
      isYourTurn: false,
      inviteNextStudent: false,
    }

    this.getRoleForClass.bind(this)
  }

  componentDidMount() {
    this.courseId = Number(window.location.href.split('/')[4])
    this.state.connection.start()

    let me = {}
    let classData = {}

    api
      .getMe()
      .then((meData) => {
        me = meData
      })
      .then(() => api.getClasses())
      .then((classPayload) => {
        classData = classPayload
      })
      .then(() => this.setState({ me, classData }))
  }

  isStudentDisplayed() {
    let { display } = this.state.displayStudentsStyle
    return display === 'grid'
  }

  alterStudentDisplay() {
    let displayStudentsStyle = this.isStudentDisplayed()
      ? { display: 'none' }
      : { display: 'grid' }

    let iconToDisplay = this.isStudentDisplayed()
      ? 'caret square up outline'
      : 'caret square down outline'

    this.setState({ displayStudentsStyle, iconToDisplay })
  }

  addMeToQueue() {
    const { firstName, lastName } = this.state.me
    const fullName = `${firstName} ${lastName}`

    if (this.state.studentsInQueue.indexOf(fullName) >= 0) {
      return
    }

    this.state.connection.addMeToQueue()
  }

  removeMeFromQueue() {
    const { firstName, lastName } = this.state.me
    const fullName = `${firstName} ${lastName}`

    if (this.state.studentsInQueue.indexOf(fullName) < 0) {
      return
    }

    this.state.connection.removeMeFromQueue()
  }

  getRoleForClass() {
    const { classData } = this.state
    let userRole = null

    classData.forEach((row) => {
      let { id, role } = row
      if (this.courseId === Number(id)) {
        userRole = role
      }
    })

    return userRole
  }

  getNextStudentInQueue() {
    this.state.connection.getNextStudent()
    this.state.inviteNextStudent = true
  }

  render() {
    const { connection } = this.state

    if (!connection) {
      return null
    }

    const userRole = this.getRoleForClass()

    let buttonToDisplay = (
      <div
        style={{
          position: 'absolute',
          width: 'calc(100% - 38px)',
          bottom: 14,
          display: 'inline-flex',
        }}
      >
        <Button onClick={this.addMeToQueue.bind(this)} primary>
          Join Queue
        </Button>
        <Button onClick={this.removeMeFromQueue.bind(this)} secondary>
          Leave Queue
        </Button>
      </div>
    )

    if (userRole !== 'Student') {
      buttonToDisplay = (
        <div
          style={{
            position: 'absolute',
            width: 'calc(100% - 38px)',
            bottom: 14,
            display: 'inline-flex',
          }}
        >
          <Button onClick={this.getNextStudentInQueue.bind(this)} primary>
            Next
          </Button>
        </div>
      )
    }

    const queueLabels =
      this.state.displayStudentsStyle.display == 'none' ? (
        <></>
      ) : (
        this.state.studentsInQueue.map((student) => (
          <QueueLabel
            vertical
            style={{
              fontSize: '1.2vw',
              textAlign: 'center',
              width: '95%',
              marginBottom: '2%',
              minWidth: '41px',
              marginLeft: '.8%',
              marginRight: '1%',
            }}
            key={student}
          >
            {student}
          </QueueLabel>
        ))
      )

    return (
      <QueueDiv>
        <YourTurnModal isYourTurn={this.state.isYourTurn} />
        <TaWaitingModal inviteNextStudent={this.state.inviteNextStudent}/>

        <Button.Group
          size="huge"
          style={{ marginBottom: 12, width: '95%' }}
          fluid
        >
          <Button
            compact
            content="Queue"
            icon={this.state.iconToDisplay}
            labelPosition="right"
            onClick={this.alterStudentDisplay.bind(this)}
            style={{
              fontSize: '1.5vw',
              textAlign: 'center',
              width: '75%',
              marginBottom: '2%',
              minWidth: '41px',
            }}
          />
        </Button.Group>

        <QueueDiv
          style={{ width: '100%', marginBottom: '2%', minWidth: '41px' }}
        >
          {queueLabels}
        </QueueDiv>

        {buttonToDisplay}
      </QueueDiv>
    )
  }
}

export default AuthRequired(Queue)
