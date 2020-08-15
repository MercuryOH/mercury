import React, { Component } from 'react'
import { Modal, Button, Header } from 'semantic-ui-react'
import { EventEmitter } from '../util/EventEmitter'

//receive an invite from someone
class ReceiveInviteModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      sender: {},
      group: {},
      onJoin: this.props.onJoin,
    }

    EventEmitter.subscribe('activateReceiveInviteModal', (msg) => {
      const { sender, currGroup } = JSON.parse(msg)
      this.setState({
        modalState: true,
        sender: sender,
        group: currGroup,
      })
    })
  }

  handleAccept = () => {
    EventEmitter.publish('currentGroupChange', this.state.group)
    this.state.onJoin(this.state.group)
    this.setState({ modalState: false })
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
              {this.state.sender.firstName} {this.state.sender.lastName} invites
              you to join {this.state.group.name}
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
                onClick={this.handleAccept}
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
                onClick={() => this.setState({ modalState: false })}
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

export default ReceiveInviteModal
