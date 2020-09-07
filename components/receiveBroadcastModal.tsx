import React, { Component } from 'react'
import { Modal, Header, Button, Icon } from 'semantic-ui-react'
import { EventEmitter } from './util/EventEmitter'

interface ReceiveBroadcastModalProps {
  userId: number
}

interface ReceiveBroadcastModalState {
  content: string
  modalState: boolean
  sender: User
}

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
}

/** Type of data received from broadcast */
interface BroadcastData {
  content: string
  sender: {
    id: number
    firstName: string
    lastName: string
    email: string
  }
}

export default class ReceiveBroadcastModal extends Component<
  ReceiveBroadcastModalProps,
  ReceiveBroadcastModalState
> {
  constructor(props: ReceiveBroadcastModalProps) {
    super(props)
    this.state = {
      content: '',
      modalState: false,
      sender: { id: -1, firstName: '', lastName: '', email: '' },
    }
    EventEmitter.subscribe('receiveBroadcast', ({ content, sender }) => {
      if (this.props.userId !== sender.id) {
        this.setState({ content, sender, modalState: true })
      }
    })
  }

  render() {
    return (
      <div>
        <Modal
          style={{ border: 'none', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
          closeOnDimmerClick={false}
          closeOnEscape={false}
          closeIcon
        >
          <Modal.Content style={{ border: 'none' }}>
            <Header>
              <Header.Content
                style={{
                  fontSize: '2vw',
                  textAlign: 'center',
                  width: '100%',
                  padding: '5%',
                  height: '50%',
                  margin: 'auto',
                }}
              >
                <Icon name="bullhorn" />
                Broadcast from TA
                <Header.Subheader>
                  {this.state.sender.firstName +
                    ' ' +
                    this.state.sender.lastName}
                </Header.Subheader>
              </Header.Content>
            </Header>

            <div
              style={{
                textAlign: 'center',
                padding: '5%',
                overflow: 'auto',
              }}
            >
              {this.state.content}
            </div>

            <div
              style={{
                textAlign: 'center',
                width: '70%',
                height: '70%',
                margin: 'auto',
                padding: '5%',
              }}
            >
              <Button
                color="yellow"
                style={{ width: '50%', fontSize: '1vw' }}
                onClick={() => {
                  this.setState({ modalState: false })
                }}
                content={'Got it'}
              />
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
