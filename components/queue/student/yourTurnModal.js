import React, { Component } from 'react'
import { Modal, Button, Header } from 'semantic-ui-react'

const timeOutTime = 3000

export default class YourTurnModal extends Component {
  constructor(props) {
    super(props)
    this.queueComponent = this.props.queueComponent

    this.state = {
      modalState: this.props.isYourTurn,
      timerRunning: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isYourTurn } = nextProps
    const { timerRunning } = this.state

    if (isYourTurn && !timerRunning) {
      this.setState(
        { modalState: nextProps.isYourTurn, timerRunning: true },
        this.startTimer
      )
      return
    }

    this.setState({ modalState: nextProps.isYourTurn })
  }

  startTimer() {
    setTimeout(this.handleTimerEnd.bind(this), timeOutTime)
  }

  handleTimerEnd() {
    const { queueWebSocketController } = this.queueComponent.state
    queueWebSocketController.signalStudentTimeout()

    this.setState({ modalState: false, timerRunning: false })
    this.queueComponent.setState({ isYourTurn: false, TAName: '' })
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
              Your turn!
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
                onClick={() => this.setState({ modalState: false })}
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
              <Button
                color="teal"
                onClick={() => this.setState({ modalState: false })}
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
              <Button
                color="red"
                onClick={() => this.setState({ modalState: false })}
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
