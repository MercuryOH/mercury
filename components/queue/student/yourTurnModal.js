import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Header } from 'semantic-ui-react'
import { EventEmitter } from '../../util/EventEmitter'

const timeOutTime = 3000
let timeOut = null

class YourTurnModal extends Component {
  constructor(props) {
    super(props)
    this.queueComponent = this.props.queueComponent

    this.state = {
      office: this.props.office,
      modalState: this.props.isYourTurn,
      timerRunning: false,
      currentGroup: this.props.currentGroup,
      TAName: '',
    }

    EventEmitter.subscribe('startYourTurnModalTimer', (TAName) => {
      this.setState({ TAName, modalState: true }, this.startTimer)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentGroup: nextProps.currentGroup })
  }

  startTimer() {
    timeOut = setTimeout(this.handleTimerEnd.bind(this), timeOutTime)
  }

  handleTimerEnd() {
    EventEmitter.publish('studentTimeout')
    this.setState({ modalState: false, TAName: '' })
  }

  handleJoin = () => {
    const { queueWebSocketController } = this.queueComponent.state
    clearTimeout(timeOut)
    this.queueComponent.setState({ isYourTurn: false, inQueue: false })
    this.setState({ modalState: false, timerRunning: false })
    queueWebSocketController.signalJoinTA(this.state.office)
    this.props.onJoin(this.state.office)
  }

  handleInvite = () => {
    const { queueWebSocketController } = this.queueComponent.state
    clearTimeout(timeOut)
    this.queueComponent.setState({ isYourTurn: false, inQueue: false })
    this.setState({ modalState: false, timerRunning: false })
    queueWebSocketController.signalJoinTA(this.state.currentGroup)
    this.props.onJoin(this.state.currentGroup)
  }

  handleDecline = () => {
    const { queueWebSocketController } = this.queueComponent.state
    clearTimeout(timeOut)
    this.queueComponent.setState({ isYourTurn: false, inQueue: false })
    this.setState({ modalState: false, timerRunning: false })
    queueWebSocketController.removeMeFromQueue()
    queueWebSocketController.signalDeclineTA()
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

YourTurnModal.propTypes = {
  office: PropTypes.object.isRequired,
  onJoin: PropTypes.func.isRequired,
}

export default YourTurnModal
