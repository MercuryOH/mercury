import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import { EventEmitter } from './util/EventEmitter'
import Loader from 'react-loader-spinner'

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

interface WaitingForNewLeaderModalProps {
  userId: number
}

interface WaitingForNewLeaderModalState {
  userId: number
  modalState: boolean
}

interface ActivateData {
  groupId: number
  userId: number
}

export default class WaitingForNewLeaderModal extends Component<
  WaitingForNewLeaderModalProps,
  WaitingForNewLeaderModalState
> {
  constructor(props: WaitingForNewLeaderModalProps) {
    super(props)
    this.state = {
      userId: this.props.userId,
      modalState: false,
    }

    EventEmitter.subscribe(
      'activateWaitingForNewLeaderModal',
      (data: ActivateData) => {
        this.setState({ modalState: true }, () => {
          sleep(3000).then(() => {
            EventEmitter.publish('bidForLeaderPosition', data)
          })
        })
      }
    )

    EventEmitter.subscribe(
      'removeWaitingForNewLeaderModal',
      (winnerId: number) => {
        this.setState({ modalState: false })
        if (this.state.userId === winnerId) {
          // you are the new leader
          EventEmitter.publish('createNotification', 'You Are The New Leader')
        }
      }
    )
  }

  render() {
    return (
      <div>
        <Modal
          style={{ border: 'none', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
        >
          <Loader
            style={{ textAlign: 'center' }}
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0}
          />

          <Modal.Content style={{ border: 'none' }}>
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
              {`Waiting For New Leader`}
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
