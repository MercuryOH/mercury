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
    this.state.connection.addMeToQueue()
  }

  removeMeFromQueue() {
    this.state.connection.removeMeFromQueue()
  }

  render() {
    const { connection } = this.state

    if (!connection) {
      return null
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
