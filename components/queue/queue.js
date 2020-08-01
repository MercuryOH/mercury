import React, { Component, useState } from 'react'
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
      inQueue: false,
    }
  }

  componentDidMount() {
    const token = Cookies.get(MERCURY_TOKEN)

    if (token) {
      api.setToken(`Bearer ${token}`)
    }

    const url = window.location.href
    this.courseId = Number(url.split('/')[4])
    const connection = new QueueWebSocket(this)
    api.getMe().then((me) => this.setState({ connection, me }))
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
<<<<<<< HEAD
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
              width: '100%',
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
=======
    const { connection } = this.state

    if (!connection) {
      return null
    }

    const queueLabels = this.state.studentsInQueue.map((student) => (
      <QueueLabel key={student}>{student}</QueueLabel>
    ))
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9

    return (
      <QueueDiv>
        <Button.Group
          size="huge"
          style={{ marginBottom: 12, width: '100%' }}
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
      </QueueDiv>
    )
  }
}

export default AuthRequired(Queue)
