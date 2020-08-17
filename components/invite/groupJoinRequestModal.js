import React, { Component } from 'react'
import { Modal, Button, Header, Label, Icon } from 'semantic-ui-react'
import { EventEmitter } from '../util/EventEmitter'

const timeOutTime = 15
let currTime = timeOutTime
const granularity = 1000
let timeOut = null

// someone requests to join your group
export default class GroupJoinRequestModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      studentId: -1,
      group: {},
      studentRequestingToJoin: '',
      timeRemaining: currTime,
    }

    EventEmitter.subscribe('activateGroupJoinRequestModal', (data) => {
      const { userId, fullName, group } = JSON.parse(data)

      this.setState(
        {
          modalState: true,
          studentId: userId,
          group,
          studentRequestingToJoin: fullName,
        },
        this.startTimer
      )
    })
  }

  startTimer() {
    currTime = timeOutTime
    timeOut = setTimeout(this.tick.bind(this), granularity)
    this.setState({ timeRemaining: currTime })
  }

  tick() {
    currTime -= 1

    if (currTime === 0) {
      this.handleTimerEnd()
    } else {
      timeOut = setTimeout(this.tick.bind(this), granularity)
      this.setState({ timeRemaining: currTime })
    }
  }

  handleTimerEnd() {
    clearTimeout(timeOut)
    const { studentId, group } = this.state
    EventEmitter.publish('declineGroupJoinRequest', {
      studentId,
      group,
    })
    this.setState({ modalState: false })
  }

  render() {
    return (
      <div>
        <Modal
          style={{ borderless: 'true', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={() => {
            clearTimeout(timeOut)
            this.setState({ modalState: false })
          }}
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
              {`${this.state.studentRequestingToJoin} Requests To Join ${this.state.group.name}`}
            </Header>

            <div
              style={{
                textAlign: 'center',
                marginTop: '5%',
                padding: 30,
                flexDirection: 'row',
              }}
            >
              <Button
                color="teal"
                onClick={() => {
                  clearTimeout(timeOut)
                  const { studentId, group } = this.state
                  EventEmitter.publish('acceptGroupJoinRequest', {
                    studentId,
                    group,
                  })
                  this.setState({ modalState: false })
                }}
                style={{
                  fontSize: '1vw',
                  textAlign: 'center',
                  width: '40%',
                  marginRight: '5%',
                  flex: 1,
                }}
              >
                Accept
              </Button>
              <Button
                color="red"
                onClick={() => {
                  clearTimeout(timeOut)
                  const { studentId, group } = this.state
                  EventEmitter.publish('declineGroupJoinRequest', {
                    studentId,
                    group,
                  })
                  this.setState({ modalState: false })
                }}
                style={{
                  fontSize: '1vw',
                  textAlign: 'center',
                  width: '40%',
                  marginLeft: '5%',
                  flex: 1,
                }}
              >
                Decline
              </Button>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
