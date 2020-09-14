import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Header } from 'semantic-ui-react'
import { EventEmitter } from './util/EventEmitter'

class OfficeAccessModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
    }

    EventEmitter.subscribe('openOfficeAccessModal', (open) =>
      this.setState({ modalState: open })
    )
  }

  render() {
    return (
      <Modal
        style={{
          borderless: 'true',
          width: '40%',
        }}
        open={this.state.modalState}
        onClose={() => this.setState({ modalState: false })}
        closeIcon
      >
        <Modal.Content>
          <Header
            style={{
              fontSize: '2vw',
              textAlign: 'center',
              width: '100%',
              padding: '5%',
              height: '50%',
              margin: 'auto',
            }}
            content={`Join Queue To Get Help From TA's!`}
          />
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
              color="grey"
              style={{ width: '50%', fontSize: '1vw' }}
              onClick={() => this.setState({ modalState: false })}
              content={'Dismiss'}
            />
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}

export default OfficeAccessModal
