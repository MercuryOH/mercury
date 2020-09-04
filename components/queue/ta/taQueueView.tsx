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

interface TAQueueViewProps {
  me: Me
}

interface TAQueueViewState {
  displayStudentsStyle: DisplayStyle
  me: Me
  iconToDisplay: string
  studentsInQueue: Array<StudentInQueue>
  nextStudentName: string
  currStudentBeingHelped: CurrStudent
  isReadyToRender: boolean
  inCallWithStudent: boolean
}

interface Me {
  id: number
  firstName: string
  lastName: string
  email: string
}

interface DisplayStyle {
  display: string
}

interface StudentInQueue {
  id: number
  fullName: string
}

interface CurrStudent {
  id: number
  name: string
}

export default class TAQueueView extends Component<
  TAQueueViewProps,
  TAQueueViewState
> {
  constructor(props) {
    super(props)
    this.state = {
      displayStudentsStyle: { display: 'grid' },
      iconToDisplay: 'caret square down outline',
      studentsInQueue: [],
      me: this.props.me,
      nextStudentName: '',
      currStudentBeingHelped: { id: -1, name: '' },
      isReadyToRender: false,
      inCallWithStudent: false,
    }

    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe(
      'activateTAWaitingModal',
      (nextStudentName: string) => {
        this.setState({ nextStudentName })

        EventEmitter.publish('newTAWaitingModalProps', {
          inviteNextStudent: true,
          nextStudentName,
        })
      }
    )

    EventEmitter.subscribe('TARejoinCall', () => {
      this.setState({ inCallWithStudent: true })
    })

    EventEmitter.subscribe('removeTAWaitingModalOnTimeout', () => {
      const { nextStudentName } = this.state
      this.createTimeoutNotification(nextStudentName)
      this.setState({
        currStudentBeingHelped: { id: -1, name: '' },
        nextStudentName: '',
      })

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
      this.setState({
        currStudentBeingHelped: { id: -1, name: '' },
        nextStudentName: '',
      })

      EventEmitter.publish('newTAWaitingModalProps', {
        inviteNextStudent: false,
        nextStudentName: '',
      })
    })

    EventEmitter.subscribe('callOver', ({ classId }: { classId: number }) => {
      const { inCallWithStudent } = this.state
      if (inCallWithStudent) {
        EventEmitter.publish('signalCallOver')
        EventEmitter.publish('activateFeedbackModal', classId)
        this.setState({
          inCallWithStudent: false,
          currStudentBeingHelped: { id: -1, name: '' },
        })
      }
    })

    EventEmitter.subscribe(
      'updateStudentsInQueue',
      (msg: Array<StudentInQueue>) => {
        this.setState({ studentsInQueue: msg })
      }
    )

    EventEmitter.subscribe(
      'updateCurrStudent',
      (currStudentBeingHelped: CurrStudent) => {
        this.setState({ currStudentBeingHelped })
      }
    )

    EventEmitter.subscribe(
      'initializeQueueOnGreeting',
      ({ currStudent, studentsInQueue }) => {
        this.setState({
          currStudentBeingHelped: currStudent,
          studentsInQueue,
        })
      }
    )
  }

  createTimeoutNotification(studentName: string) {
    EventEmitter.publish(
      'createNotification',
      `${studentName}'s Invitation Has Expired`
    )
  }

  createDeclineNotification(studentName: string) {
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

    if (currStudentBeingHelped.id === -1) {
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
          backgroundColor: '#03b5ad',
          marginRight: '1%',
          color: 'white'
        }}
        key={currStudentBeingHelped.id}
      >
        {currStudentBeingHelped.name}
      </QueueLabel>
    )
  }

  createQueueLabel(student: StudentInQueue) {
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
        key={student.id}
      >
        {student.fullName}
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
        this.state.studentsInQueue.map(this.createQueueLabel.bind(this))
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
