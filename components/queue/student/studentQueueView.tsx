import React, { Component } from 'react'
import styled from 'styled-components'
import * as api from '../../../util/mercuryService'
import YourTurnModal from './yourTurnModal'
import { Label, Button } from 'semantic-ui-react'
import { EventEmitter } from '../../util/EventEmitter'
import { confirmAlert } from 'react-confirm-alert' // Import

const QueueDiv = styled.div`
  grid-gap: 2vh;
`

const QueueLabel = styled(Label)`
  text-align: center;
`

interface StudentQueueViewProps {
  me: Me
  office: Group
  onJoin: (para: Group) => Promise<void>
  classId: number
}

interface StudentQueueViewState {
  me: Me
  office: Group
  onJoin: (para: Group) => Promise<void>
  displayStudentsStyle: DisplayStyle
  iconToDisplay: string
  studentsInQueue: Array<StudentInQueue>
  inQueue: boolean
  isYourTurn: boolean
  currStudentBeingHelped: CurrStudent
  isReadyToRender: boolean
  inCallWithTA: boolean
  currentGroup: CurrentGroup
  groups: any
}

interface Me {
  id: number
  firstName: string
  lastName: string
  email: string
}

interface Group {
  id: number
  name: string
  type: string
  sessionId: string
  userId: number
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

interface CurrentGroup {
  id: number
  name: string
}

/**
 * This is how the student views the Queue
 */

class StudentQueueView extends Component<
  StudentQueueViewProps,
  StudentQueueViewState
> {
  constructor(props: StudentQueueViewProps) {
    super(props)
    this.state = {
      displayStudentsStyle: { display: 'grid' },
      iconToDisplay: 'caret square down outline',
      studentsInQueue: [],
      me: this.props.me,
      inQueue: false,
      isYourTurn: false,
      currStudentBeingHelped: { id: -1, name: '' },
      isReadyToRender: false,
      office: this.props.office,
      inCallWithTA: false,
      currentGroup: { id: -1, name: '' },
      onJoin: this.props.onJoin,
      groups: [],
    }

    this.defineEventEmitterCallbacks()
  }

  /**
   * Define EventEmitter subscribers
   */

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('activateYourTurnModal', (TAId: number) => {
      this.setState({ inQueue: false })
      EventEmitter.publish('startYourTurnModalTimer', TAId)
    })

    EventEmitter.subscribe(
      'updateStudentsInQueue',
      (msg: Array<StudentInQueue>) => {
        this.setState({
          studentsInQueue: msg,
        })
      }
    )

    EventEmitter.subscribe('addMeToQueue', () => {
      this.setState({ inQueue: true })
    })

    EventEmitter.subscribe('removeMeFromQueue', () => {
      this.setState({ inQueue: false })
    })

    EventEmitter.subscribe('studentTimeout', (TAId: number) => {
      EventEmitter.publish('signalStudentTimeout', TAId)
      this.createTimeoutNotification()
    })

    EventEmitter.subscribe('studentJoinTA', (TAId: number) => {
      const { office, onJoin, me } = this.state
      EventEmitter.publish('signalJoinTA', {
        group: this.state.groups.filter(
          (check) =>
            check.type === 'office' && Number(check.UserId) === Number(TAId)
        )[0],
        TAId,
        me,
      })
      onJoin(
        this.state.groups.filter(
          (check) =>
            check.type === 'office' && Number(check.UserId) === Number(TAId)
        )[0]
      )
      this.setState({ inQueue: false, inCallWithTA: true })
    })

    EventEmitter.subscribe('studentInviteTA', (TAId: number) => {
      const { currentGroup, me } = this.state
      EventEmitter.publish('signalJoinTA', { group: currentGroup, TAId, me })
      this.setState({ inQueue: false, inCallWithTA: true })
    })

    EventEmitter.subscribe('studentDeclineTA', (TAId: number) => {
      EventEmitter.publish('signalDeclineTA', TAId)
      this.setState({ inQueue: false })
    })

    EventEmitter.subscribe(
      'currentGroupChange',
      (currentGroup: CurrentGroup) => {
        this.setState({ currentGroup })
      }
    )

    EventEmitter.subscribe('callOver', ({ classId }: { classId: number }) => {
      const { inCallWithTA } = this.state

      if (inCallWithTA) {
        EventEmitter.publish('signalCallOver')
        EventEmitter.publish('activateFeedbackModal', classId)
        this.setState({
          inCallWithTA: false,
          currStudentBeingHelped: { id: -1, name: '' },
        })
      }
    })

    EventEmitter.subscribe(
      'updateCurrStudent',
      (currStudentBeingHelped: CurrStudent) => {
        this.setState({ currStudentBeingHelped })
      }
    )

    EventEmitter.subscribe(
      'initializeQueueOnGreeting',
      ({ currStudent, studentsInQueue }) => {
        const { id: myId } = this.state.me
        const inQueue =
          studentsInQueue.filter(({ id }) => id === myId).length > 0
        this.setState({
          currStudentBeingHelped: currStudent,
          studentsInQueue,
          inQueue,
        })
      }
    )
  }

  createTimeoutNotification() {
    EventEmitter.publish('createNotification', 'Your Invitation Has Expired')
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
    const { inQueue, currStudentBeingHelped, me } = this.state
    const { id: helpedId } = currStudentBeingHelped
    const { id: myId } = me

    if (inQueue || helpedId === myId) {
      return
    }

    confirmAlert({
      title: 'Anonymous Option',
      message: 'Would you like to be anonymous on the queue?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            EventEmitter.publish('signalAddMeToQueue', { anonymous: true })
          },
        },
        {
          label: 'No',
          onClick: () => {
            EventEmitter.publish('signalAddMeToQueue', { anonymous: false })
          },
        },
      ],
    })
  }

  removeMeFromQueue() {
    const { inQueue } = this.state

    if (!inQueue) {
      return
    }

    EventEmitter.publish('signalRemoveMeFromQueue')
  }

  getButtonToDisplay() {
    if (
      this.state.inCallWithTA ||
      this.state.currStudentBeingHelped.id === this.state.me.id
    ) {
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
    api
      .getGroups(Number(this.props.classId))
      .then((groups) => this.setState({ groups: groups }))

    //wrong typing on courseId
  }

  createCurrStudentLabel() {
    const { currStudentBeingHelped } = this.state
    const { id, name } = currStudentBeingHelped

    if (id === -1) {
      return null
    }

    const nameToShow =
      name === 'Anonymous' && id == this.state.me.id ? `Anonymous (You)` : name

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
          color: 'white',
        }}
        key={id}
      >
        {nameToShow}
      </QueueLabel>
    )
  }

  createQueueLabel(student: StudentInQueue) {
    const { fullName, id } = student

    const nameToShow =
      fullName === 'Anonymous' && id == this.state.me.id
        ? `Anonymous (You)`
        : fullName

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
        {nameToShow}
      </QueueLabel>
    )
  }

  render() {
    const { isReadyToRender } = this.state

    if (!isReadyToRender) {
      return null
    }

    const queueLabels = this.isStudentDisplayed()
      ? this.state.studentsInQueue.map(this.createQueueLabel.bind(this))
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
              fontSize: '1.2vw',
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

export default StudentQueueView
