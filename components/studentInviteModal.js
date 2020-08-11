import React, { Component } from 'react'
import { Modal, Button, Search } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import { EventEmitter } from './util/EventEmitter'

class StudentInviteModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: this.props.isOpen,
    }

    EventEmitter.subscribe('openInviteModal', (openInviteModal) => {
      this.setState({ modalState: openInviteModal })
    })
  }

  handleInvite = () => {
    this.setState({ modalState: false })
    EventEmitter.publish(
      'openInviteModal',
      false
    )
  }

  render() {
    return (
      <div>
        <Modal
          style={{ borderless: 'true', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={this.handleInvite}
          closeOnDimmerClick={false}
          closeOnEscape={false}
          closeIcon
        >
          <Modal.Content style={{ borderless: 'true' }}>
            <div
              style={{
                textAlign: 'center',
                padding: 80,
              }}
            >
              <Search
                fluid
                placeholder="Invite students..."
                input={{ fluid: true }}
              />
            </div>

            <div
              style={{
                textAlign: 'center',
                width: '70%',
                height: '70%',
                margin: 'auto',
                padding: 30,
              }}
            >
              <Button
                color="teal"
                style={{ width: '50%', fontSize: '1vw' }}
                onClick={this.handleInvite}
              >
                Invite
              </Button>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

StudentInviteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default StudentInviteModal
