import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import YourTurnModal from './yourTurnModal'
import StudentWebSocketController from './studentWebSocket'
import { Label, Button } from 'semantic-ui-react'
import { NotificationContainer, NotificationManager } from 'react-notifications'

const QueueDiv = styled.div`
  grid-gap: 2vh;
`

const QueueLabel = styled(Label)`
  text-align: center;
`

/**
 * This is how the student views the Queue
 */

class StudentQueueView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayStudentsStyle: { display: 'grid' },
      iconToDisplay: 'caret square down outline',
      queueWebSocketController: new StudentWebSocketController(this),
      studentsInQueue: [],
      me: this.props.me,
      classData: this.props.classData,
      inQueue: false,
      isYourTurn: false,
      nextStudentName: '',
      TAName: '',
      isReadyToRender: false,
    }
  }

  createTimeoutNotification() {
    NotificationManager.info('Your Invitation Has Expired')
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

  getButtonToDisplay() {
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

  componentDidMount() {
    this.courseId = Number(window.location.href.split('/')[4])
    const { queueWebSocketController } = this.state
    queueWebSocketController.start()
    this.setState({ isReadyToRender: true })
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
    const { isReadyToRender } = this.state

    if (!isReadyToRender) {
      return null
    }

    const queueLabels =
      this.state.displayStudentsStyle.display == 'none'
        ? []
        : this.state.studentsInQueue.map(this.createQueueLabel)

    return (
      <QueueDiv>
        <YourTurnModal
          isYourTurn={this.state.isYourTurn}
          queueComponent={this}
          onJoin={this.props.onJoin}
          group={{}}
        />

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

        <NotificationContainer />
      </QueueDiv>
    )
  }
}

StudentQueueView.propTypes = {
  onJoin: PropTypes.func.isRequired,
}

export default StudentQueueView
