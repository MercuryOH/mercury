import React, { Component } from 'react'
import { Label, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import QueueWebSocketController from './queuews'
import * as api from '../../util/mercuryService'
import YourTurnModal from './yourTurnModal'
import TaWaitingModal from './taWaitingModal'

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
      queueWebSocketController: new QueueWebSocketController(this),
      studentsInQueue: [],
      me: {},
      classData: [],
      inQueue: false,
      isYourTurn: false,
      inviteNextStudent: false,
      nextStudentName: '',
      TAName: '',
    }

    this.getRoleForClass.bind(this)
  }

  componentDidMount() {
    this.courseId = Number(window.location.href.split('/')[4])

    let me = {}
    let classData = {}

    api
      .getMe()
      .then((meData) => {
        me = meData
        const { firstName, lastName } = meData
        const fullName = `${firstName} ${lastName}`
        this.state.queueWebSocketController.start(fullName)
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

    this.state.queueWebSocketController.addMeToQueue()
  }

  removeMeFromQueue() {
    const { firstName, lastName } = this.state.me
    const fullName = `${firstName} ${lastName}`

    if (this.state.studentsInQueue.indexOf(fullName) < 0) {
      return
    }

    this.state.queueWebSocketController.removeMeFromQueue()
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
    this.state.queueWebSocketController.getNextStudent()
  }

  getButtonToDisplay() {
    if (this.getRoleForClass() === null) {
      return null
    }

    if (this.isStudent()) {
      const buttonToDisplay = this.state.inQueue ? (
        <Button
          onClick={this.removeMeFromQueue.bind(this)}
          style={{ width: '100%', fontSize: '1vw' }}
          secondary
        >
          Leave Queue
        </Button>
      ) : (
        <Button
          onClick={this.addMeToQueue.bind(this)}
          style={{ width: '100%', fontSize: '1vw' }}
          primary
        >
          Join Queue
        </Button>
      )

      return (
        <div
          style={{
            position: 'absolute',
            width: 'calc(100% - 38px)',
            bottom: 14,
            display: 'inline-flex',
          }}
        >
          {buttonToDisplay}
        </div>
      )
    }

    return (
      <div
        style={{
          position: 'absolute',
          width: 'calc(100% - 38px)',
          bottom: 14,
          display: 'inline-flex',
        }}
      >
        <Button style={{ width: '100%', fontSize: '1vw' }}
        onClick={this.getNextStudentInQueue.bind(this)} primary>
          Next
        </Button>
      </div>
    )
  }

  isStudent() {
    return this.getRoleForClass() === 'Student'
  }

  getYourTurnModal() {
    if (this.isStudent()) {
      return (
        <YourTurnModal
          isYourTurn={this.state.isYourTurn}
          queueComponent={this}
          TAName={this.state.TAName}
        />
      )
    }

    return null
  }

  getTAWaitingModal() {
    if (!this.isStudent()) {
      return (
        <TaWaitingModal
          inviteNextStudent={this.state.inviteNextStudent}
          studentName={this.state.nextStudentName}
        />
      )
    }

    return null
  }

  createQueueLabel(student) {
    return (
      <QueueLabel
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
    )
  }

  render() {
    const { queueWebSocketController } = this.state

    if (!queueWebSocketController.hasStarted()) {
      return null
    }

    const queueLabels =
      this.state.displayStudentsStyle.display == 'none' ? (
        <></>
      ) : (
        this.state.studentsInQueue.map(this.createQueueLabel)
      )

    return (
      <QueueDiv>
        {this.getTAWaitingModal()}
        {this.getYourTurnModal()}

        <Button.Group
          size="huge"
          style={{ marginBottom: 12, width: '95%' }}
          fluid
          vertical
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
              width: '100%',
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

        {this.getButtonToDisplay()}
      </QueueDiv>
    )
  }
}

export default Queue
