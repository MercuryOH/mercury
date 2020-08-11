import React, { Component } from 'react'
import { Modal, Button, Header, Label, Icon } from 'semantic-ui-react'
import { EventEmitter } from '../../util/EventEmitter'

const timeOutTime = 15
let currTime = timeOutTime
const granularity = 1000

let timeOut = null

class YourTurnModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      currentGroup: { id: '', name: '' },
      TAName: '',
      timeRemaining: currTime,
    }

    EventEmitter.subscribe('startYourTurnModalTimer', (TAName) => {
      this.setState({ TAName, modalState: true }, this.startTimer)
    })

    EventEmitter.subscribe('currentGroupChange', (currentGroup) => {
      this.setState({ currentGroup })
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
    const { TAName } = this.state
    EventEmitter.publish('studentTimeout', TAName)
    this.setState({ modalState: false, TAName: '' })
  }

  handleJoin = () => {
    const { TAName } = this.state
    clearTimeout(timeOut)
    EventEmitter.publish('studentJoinTA', TAName)
    this.setState({ modalState: false })
  }

  handleInvite = () => {
    const { TAName } = this.state
    clearTimeout(timeOut)
    EventEmitter.publish('studentInviteTA', TAName)
    this.setState({ modalState: false })
  }

  handleDecline = () => {
    const { TAName } = this.state
    clearTimeout(timeOut)
    EventEmitter.publish('studentDeclineTA', TAName)
    this.setState({ modalState: false })
  }

  enableInviteTA() {
    return (
      this.state.currentGroup.id !== '' && (
        <Button
          color="teal"
          onClick={this.handleInvite}
          style={{
            fontSize: '1vw',
            textAlign: 'center',
            width: '25%',
            marginRight: '5%',
            flex: 1,
          }}
        >
          Invite TA
        </Button>
      )
    )
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
              Your Turn!
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
                color="green"
                onClick={this.handleJoin}
                style={{
                  fontSize: '1vw',
                  textAlign: 'center',
                  width: '25%',
                  marginRight: '5%',
                  flex: 1,
                }}
              >
                Join TA
              </Button>
              {this.enableInviteTA()}
              <Button
                color="red"
                onClick={this.handleDecline}
                style={{
                  fontSize: '1vw',
                  textAlign: 'center',
                  width: '25%',
                  //marginLeft: '5%',
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

export default YourTurnModal
