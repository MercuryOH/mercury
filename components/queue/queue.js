import React, { Component } from 'react'
import { Label, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import QueueWebSocket from './queuews'
import * as api from '../../util/mercuryService'
import { AuthRequired } from '../../components/authProvider'
import Cookies from 'js-cookie'

const QueueDiv = styled.div`
  grid-gap: 2vh;
`

const QueueLabel = styled(Label)`
  text-align: center;
`

const MERCURY_TOKEN = 'mercury-token'

class Queue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayStudentsStyle: { display: 'grid' },
      iconToDisplay: 'caret square down outline',
      connection: null,
      studentsInQueue: [],
      me: {},
      classData: '',
      inQueue: false,
    }
  }

  async componentDidMount() {
    const token = Cookies.get(MERCURY_TOKEN)

    if (token) {
      api.setToken(`Bearer ${token}`)
    }

    this.courseId = Number(window.location.href.split('/')[4])
    const connection = new QueueWebSocket(this)

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
      .then(() => this.setState({ me, classData, connection }))
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

  render() {
    const { connection, classData } = this.state

    if (!connection) {
      return null
    }

    const { role } = classData

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

    if (role !== 'Student') {
      buttonToDisplay = (
        <div
          style={{
            position: 'absolute',
            width: 'calc(100% - 38px)',
            bottom: 14,
            display: 'inline-flex',
          }}
        >
          <Button primary>Next</Button>
        </div>
      )
    }

    const queueLabels = this.state.studentsInQueue.map((student) => (
      <QueueLabel key={student}>{student}</QueueLabel>
    ))

    return (
      <QueueDiv style={{ display: 'grid' }}>
        <Button.Group size="huge" fluid>
          <Button icon={'angle left'} content="Queue" />
          <Button
            icon={this.state.iconToDisplay}
            onClick={this.alterStudentDisplay.bind(this)}
          />
        </Button.Group>

        <br></br>
        <QueueDiv style={this.state.displayStudentsStyle}>
          {queueLabels}
        </QueueDiv>

        {buttonToDisplay}
      </QueueDiv>
    )
  }
}

export default AuthRequired(Queue)
