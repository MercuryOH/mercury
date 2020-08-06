import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import YourTurnModal from './yourTurnModal'
import StudentWebSocketController from './studentWebSocket'
import { Label, Button } from 'semantic-ui-react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { EventEmitter } from '../../util/EventEmitter'

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
      queueWebSocketController: new StudentWebSocketController(),
      studentsInQueue: [],
      me: this.props.me,
      inQueue: false,
      isYourTurn: false,
      nextStudentName: '',
      isReadyToRender: false,
      office: this.props.office,
      inCall: false,
      currentGroup: { id: '', name: '' },
      onJoin: this.props.onJoin,
    }
    this.defineEventEmitterCallbacks()
  }

  /**
   * Define EventEmitter subscribers
   */

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('activateYourTurnModal', (TAName) => {
      this.setState({ inQueue: false })
      EventEmitter.publish('startYourTurnModalTimer', TAName)
    })

    EventEmitter.subscribe('updateStudentsInQueue', (msg) => {
      this.setState({ studentsInQueue: msg })
    })

    EventEmitter.subscribe('addMeToQueue', () => {
      this.setState({ inQueue: true })
    })

    EventEmitter.subscribe('removeMeFromQueue', () => {
      this.setState({ inQueue: false })
    })

    EventEmitter.subscribe('studentTimeout', (TAName) => {
      const { queueWebSocketController } = this.state
      queueWebSocketController.signalStudentTimeout(TAName)
      this.createTimeoutNotification()
    })

    EventEmitter.subscribe('studentJoinTA', (TAName) => {
      const { queueWebSocketController, office, onJoin } = this.state
      queueWebSocketController.signalJoinTA(office, TAName)
      this.setState({ inQueue: false })
      onJoin(office)
    })

    EventEmitter.subscribe('studentInviteTA', (TAName) => {
      const { queueWebSocketController, onJoin, currentGroup } = this.state
      queueWebSocketController.signalJoinTA(currentGroup, TAName)
      this.setState({ inQueue: false })
      onJoin(currentGroup)
    })

    EventEmitter.subscribe('studentDeclineTA', (TAName) => {
      const { queueWebSocketController, onJoin, currentGroup } = this.state
      queueWebSocketController.signalDeclineTA(TAName)
      this.setState({ inQueue: false })
      onJoin(currentGroup)
    })

    EventEmitter.subscribe('currentGroupChange', (currentGroup) => {
      console.log(currentGroup)
      this.setState({ currentGroup })
    })
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
    if (this.state.inCall) {
      return null
    }

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
    const { me, queueWebSocketController } = this.state
    const courseId = Number(window.location.href.split('/')[4])
    queueWebSocketController.start({ me, courseId })
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

    const queueLabels = this.isStudentDisplayed()
      ? this.state.studentsInQueue.map(this.createQueueLabel)
      : []

    return (
      <QueueDiv>
        <YourTurnModal />

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
