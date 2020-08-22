import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import { EventEmitter } from './util/EventEmitter'
import Loader from 'react-loader-spinner'

export default class WaitingForNewLeaderModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.user,
      modalState: false,
    }

    EventEmitter.subscribe('activateWaitingForNewLeaderModal', (data) => {
      this.setState({ modalState: true })
      EventEmitter.publish('bidForLeaderPosition', data)
    })

    EventEmitter.subscribe('removeWaitingForNewLeaderModal', (winnerId) => {
      this.setState({ modalState: false })
      if (this.state.userId === winnerId) {
        console.log('publishing new leader')
        // you are the new leader
        EventEmitter.publish('createNotification', 'You Are The New Leader')
      }
    })
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
