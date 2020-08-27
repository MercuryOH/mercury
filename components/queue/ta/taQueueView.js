import React, { Component } from 'react'
import { Label, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import TaWaitingModal from './taWaitingModal'
import { EventEmitter } from '../../util/EventEmitter'

const QueueDiv = styled.div`
  grid-gap: 2vh;
`

const QueueLabel = styled(Label)`
  text-align: center;
`

export default class TAQueueView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayStudentsStyle: { display: 'grid' },
      iconToDisplay: 'caret square down outline',
      studentsInQueue: [],
      me: this.props.me,
      nextStudentName: '',
      currStudentBeingHelped: '',
      isReadyToRender: false,
      inCallWithStudent: false,
    }

    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('activateTAWaitingModal', (nextStudentName) => {
      this.setState({ nextStudentName })

      EventEmitter.publish('newTAWaitingModalProps', {
        inviteNextStudent: true,
        nextStudentName,
      })
    })

    EventEmitter.subscribe('TARejoinCall', () => {
      this.setState({ inCallWithStudent: true })
    })

    EventEmitter.subscribe('removeTAWaitingModalOnTimeout', () => {
      const { nextStudentName } = this.state
      this.createTimeoutNotification(nextStudentName)
      this.setState({ currStudentBeingHelped: '', nextStudentName: '' })

      EventEmitter.publish('newTAWaitingModalProps', {
        inviteNextStudent: false,
        nextStudentName: '',
      })
    })

    EventEmitter.subscribe('removeTAWaitingModalOnAccept', () => {
      this.setState({ nextStudentName: '', inCallWithStudent: true })

      EventEmitter.publish('newTAWaitingModalProps', {
        inviteNextStudent: false,
        nextStudentName: '',
      })
    })

    EventEmitter.subscribe('removeTAWaitingModalOnDecline', () => {
      const { nextStudentName } = this.state
      this.createDeclineNotification(nextStudentName)
      this.setState({ currStudentBeingHelped: '', nextStudentName: '' })

      EventEmitter.publish('newTAWaitingModalProps', {
        inviteNextStudent: false,
        nextStudentName: '',
      })
    })

    EventEmitter.subscribe('callOver', (classId) => {
      const { inCallWithStudent } = this.state
      if (inCallWithStudent) {
        EventEmitter.publish('signalCallOver')
        EventEmitter.publish('activateFeedbackModal', classId)
        this.setState({ inCallWithStudent: false, currStudentBeingHelped: '' })
      }
    })

    EventEmitter.subscribe('updateStudentsInQueue', (msg) => {
      this.setState({ studentsInQueue: msg.map(({ fullName }) => fullName) })
    })

    EventEmitter.subscribe('updateCurrStudent', (currStudentBeingHelped) => {
      this.setState({ currStudentBeingHelped })
    })

    EventEmitter.subscribe(
      'initializeQueueOnGreeting',
      ({ currStudent, studentsInQueue }) => {
        const myId = this.state.me.id
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

  createTimeoutNotification(studentName) {
    EventEmitter.publish(
      'createNotification',
      `${studentName}'s Invitation Has Expired`
    )
  }

  createDeclineNotification(studentName) {
    EventEmitter.publish(
      'createNotification',
      `${studentName} Has Declined The Call`
    )
  }

  componentDidMount() {
    EventEmitter.publish('greeting')
    this.setState({ isReadyToRender: true })
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

  getNextStudentInQueue() {
    EventEmitter.publish('signalGetNextStudent')
  }

  getButtonToDisplay() {
    if (this.state.inCallWithStudent) {
      return null
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
        <Button
          style={{ width: '100%', fontSize: '1vw' }}
          onClick={this.getNextStudentInQueue.bind(this)}
          primary
        >
          Next
        </Button>
      </div>
    )
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

    const queueLabels =
      this.state.displayStudentsStyle.display == 'none' ? (
        <></>
      ) : (
        this.state.studentsInQueue.map(this.createQueueLabel)
      )

    return (
      <QueueDiv>
        <TaWaitingModal />

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
      </QueueDiv>
    )
  }
}
