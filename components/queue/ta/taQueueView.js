import React, { Component } from 'react'
import { Label, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import TaWaitingModal from './taWaitingModal'
import TAWebSocketController from './taWebSocket'

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
      queueWebSocketController: new TAWebSocketController(this),
      studentsInQueue: [],
      me: this.props.me,
      classData: this.props.classData,
      inviteNextStudent: false,
      nextStudentName: '',
      isReadyToRender: false,
    }
  }

  componentDidMount() {
    this.courseId = Number(window.location.href.split('/')[4])
    const { queueWebSocketController } = this.state
    queueWebSocketController.start()
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
    this.state.queueWebSocketController.getNextStudent()
  }

  getButtonToDisplay() {
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
        <TaWaitingModal
          inviteNextStudent={this.state.inviteNextStudent}
          studentName={this.state.nextStudentName}
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
      </QueueDiv>
    )
  }
}
