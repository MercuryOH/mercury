import React, { Component } from 'react'
import { Modal, Header, Label, Icon, Button } from 'semantic-ui-react'
import { EventEmitter } from '../util/EventEmitter'
import Loader from 'react-loader-spinner'

const timeOutTime = 10
let currTime = timeOutTime
const granularity = 1000
let timeOut = null

export default class WaitingForRequestApprovalModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: false,
      group: {},
      timeRemaining: currTime,
      displayStyle: '',
    }

    EventEmitter.subscribe(
      'activateWaitingForRequestApprovalModal',
      (group) => {
        this.setState({ modalState: true, group }, this.startTimer())
      }
    )

    EventEmitter.subscribe('removeWaitingForRequestApprovalModal', () => {
      this.setState({ modalState: false, group: {} })
    })
  }

  startTimer() {
    clearTimeout(timeOut)
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
    this.setState({ buttonDisplayStyle: 'none' })
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
          <Label
            style={{
              width: '100%',
              textAlign: 'center',
              display: this.state.displayStyle,
            }}
          >
            <Icon name="hourglass" />
            {this.state.timeRemaining}
          </Label>

          <Loader
            style={{ textAlign: 'center' }}
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0}
          />

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
              {`Waiting To Join ${this.state.group.name}`}
            </Header>

            <div
              style={{
                textAlign: 'center',
                marginTop: '5%',
                padding: 30,
                flexDirection: 'row',
                display: this.state.displayStyle,
              }}
            >
              <Button
                color="red"
                onClick={() => {
                  clearTimeout(timeOut)
                  EventEmitter.publish(
                    'declineWaitingForRequestApproval',
                    this.state.group
                  )
                  this.setState({ modalState: false, group: {} })
                }}
                style={{
                  fontSize: '1vw',
                  textAlign: 'center',
                  width: '40%',
                  marginRight: '5%',
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
