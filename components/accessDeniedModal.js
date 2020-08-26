import React, { Component } from 'react'
import { Modal, Label } from 'semantic-ui-react'
import { EventEmitter } from './util/EventEmitter'

class AccessDeniedModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
    }

    EventEmitter.subscribe('leaveCallOnError', () => {
      this.setState({ modalState: true })
    })
  }

  render() {
    return (
      <div>
        <Modal
          style={{ borderless: 'true', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
          closeOnDimmerClick={true}
          closeOnEscape={true}
        >
          <Modal.Content style={{ borderless: 'true' }}>
            <div
              style={{
                textAlign: 'center',
                marginTop: '5%',
                padding: 30,
                flexDirection: 'row',
              }}
            >
              <Label
                size="massive"
                style={{
                  fontSize: '1.5vw',
                  textAlign: 'center',
                  width: '100%',
                  marginBottom: '4%',
                  minWidth: '41px',
                }}
              >
                {
                  "We noticed that you denied access to your microphone, camera, or screen. Please click the camera/microphone/screen blocked icon in your browser's address bar, allow access, and then refresh the page and rejoin the call. You will be able to mute yourself or disable your video once you join a call."
                }
              </Label>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default AccessDeniedModal
