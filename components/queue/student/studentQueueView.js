import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import YourTurnModal from './yourTurnModal'
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
      studentsInQueue: [],
      me: this.props.me,
      inQueue: false,
      isYourTurn: false,
      currStudentBeingHelped: '',
      isReadyToRender: false,
      office: this.props.office,
      inCallWithTA: false,
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
      this.setState({
        studentsInQueue: msg.map(({ fullName }) => fullName),
      })
    })

    EventEmitter.subscribe('addMeToQueue', () => {
      this.setState({ inQueue: true })
    })

    EventEmitter.subscribe('removeMeFromQueue', () => {
      this.setState({ inQueue: false })
    })

    EventEmitter.subscribe('studentTimeout', (TAName) => {
      EventEmitter.publish('signalStudentTimeout', TAName)
      this.createTimeoutNotification()
    })

    EventEmitter.subscribe('studentJoinTA', (TAName) => {
      const { office, onJoin, me } = this.state
      EventEmitter.publish('signalJoinTA', { group: office, TAName, me })
      this.setState({ inQueue: false, inCallWithTA: true })
      onJoin(office)
    })

    EventEmitter.subscribe('studentInviteTA', (TAName) => {
      const { onJoin, currentGroup, me } = this.state
      EventEmitter.publish('signalJoinTA', { group: currentGroup, TAName, me })
      this.setState({ inQueue: false, inCallWithTA: true })
      onJoin(currentGroup)
    })

    EventEmitter.subscribe('studentDeclineTA', (TAName) => {
      const { onJoin, currentGroup } = this.state
      EventEmitter.publish('signalDeclineTA', TAName)
      this.setState({ inQueue: false })
      onJoin(currentGroup)
    })

    EventEmitter.subscribe('currentGroupChange', (currentGroup) => {
      this.setState({ currentGroup })
    })

    EventEmitter.subscribe('callOver', (classId) => {
      const { inCallWithTA } = this.state

      if (inCallWithTA) {
        EventEmitter.publish('signalCallOver')
        EventEmitter.publish('activateFeedbackModal', classId)
        this.setState({ inCallWithTA: false, currStudentBeingHelped: '' })
      }
    })

    EventEmitter.subscribe('updateCurrStudent', (currStudentBeingHelped) => {
      this.setState({ currStudentBeingHelped })
    })

    EventEmitter.subscribe(
      'initializeQueueOnGreeting',
      ({ currStudent, studentsInQueue }) => {
        const { id: myId } = this.state.me
        const inQueue =
          studentsInQueue.filter(({ id }) => id === myId).length > 0
        this.setState({
          currStudentBeingHelped: currStudent,
          studentsInQueue: studentsInQueue.map(({ fullName }) => fullName),
          inQueue,
        })
      }
    )
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

    if (
      this.state.studentsInQueue.indexOf(fullName) >= 0 ||
      this.state.currStudentBeingHelped === fullName
    ) {
      return
    }

    EventEmitter.publish('signalAddMeToQueue')
  }

  removeMeFromQueue() {
    const { firstName, lastName } = this.state.me
    const fullName = `${firstName} ${lastName}`

    if (this.state.studentsInQueue.indexOf(fullName) < 0) {
      return
    }

    EventEmitter.publish('signalRemoveMeFromQueue')
  }

  getButtonToDisplay() {
    if (this.state.inCallWithTA) {
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
    EventEmitter.publish('greeting')
    this.setState({ isReadyToRender: true })
  }

  createCurrStudentLabel() {
    const { currStudentBeingHelped } = this.state

    if (currStudentBeingHelped.length == 0) {
      return null
    }

    return (
      <QueueLabel
        style={{
          fontSize: '1.2vw',
          textAlign: 'center',
          width: '95%',
          marginBottom: '2%',
          minWidth: '41px',
          marginLeft: '.8%',
          backgroundColor: 'red',
          marginRight: '1%',
        }}
        key={currStudentBeingHelped}
      >
        {currStudentBeingHelped}
      </QueueLabel>
    )
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

        {this.createCurrStudentLabel()}

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
