import React, { Component } from 'react'
import { Modal, Label, Header, Icon } from 'semantic-ui-react'
import { EventEmitter } from '../../util/EventEmitter'

const timeOutTime = 15
let currTime = timeOutTime
const granularity = 1000

let timeOut = null
let studentDisconnectTimeout = null

export default class TaWaitingModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: false,
      studentName: '',
      timeRemaining: currTime,
    }

    EventEmitter.subscribe('newTAWaitingModalProps', (nextProps) => {
      const { inviteNextStudent, nextStudentName } = nextProps
      const callBackToUse = inviteNextStudent ? this.startTimer : this.endTimer

      this.setState(
        { modalState: inviteNextStudent, studentName: nextStudentName },
        callBackToUse
      )
    })
  }

  clearAllTimeouts() {
    if (timeOut) {
      clearTimeout(timeOut)
    }

    if (studentDisconnectTimeout) {
      clearTimeout(studentDisconnectTimeout)
    }
  }

  startTimer() {
    this.clearAllTimeouts()
    currTime = timeOutTime
    timeOut = setTimeout(this.tick.bind(this), granularity)
    this.setState({ timeRemaining: currTime })
  }

  endTimer() {
    this.clearAllTimeouts()
  }

  endModalWaitingOnTimeout() {
    EventEmitter.publish('removeTAWaitingModalOnTimeout')
  }

  tick() {
    currTime -= 1

    if (currTime === 0) {
      studentDisconnectTimeout = setTimeout(
        this.endModalWaitingOnTimeout.bind(this),
        3000
      )
      return
    } else {
      timeOut = setTimeout(this.tick.bind(this), granularity)
      this.setState({ timeRemaining: currTime })
    }
  }

  render() {
    return (
      <div>
        <Modal
          style={{ borderless: 'true', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
          closeOnDimmerClick={false}
          closeOnEscape={false}
        >
          <Label style={{ width: '100%', textAlign: 'center' }}>
            <Icon name="hourglass" />
            {this.state.timeRemaining}
          </Label>

          <Modal.Content style={{ borderless: 'true' }}>
            <Header
              style={{
                fontSize: '2vw',
                textAlign: 'center',
                width: '100%',
                padding: 50,
                height: '50%',
                margin: 'auto',
              }}
            >
              {`Waiting For ${this.state.studentName} To Respond...`}
            </Header>

            <div
              style={{
                textAlign: 'center',
                marginTop: '5%',
                padding: 30,
                flexDirection: 'row',
              }}
            ></div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
