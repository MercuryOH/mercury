import React, { Component } from 'react'
import { Modal, Header } from 'semantic-ui-react'
import { EventEmitter } from '../util/EventEmitter'

export default class WaitingForRequestApprovalModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: false,
      group: {},
    }

    EventEmitter.subscribe(
      'activateWaitingForRequestApprovalModal',
      (group) => {
        this.setState({ modalState: true, group })
      }
    )

    EventEmitter.subscribe('removeWaitingForRequestApprovalModal', () => {
      this.setState({ modalState: false, group: {} })
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
              }}
            ></div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
