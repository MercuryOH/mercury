import React, { Component } from 'react'
import { Modal, Button, Header, Label, Icon } from 'semantic-ui-react'
import FormHTMLEditor from './FormHTMLEditor'

export default class FeedbackModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: true,
    }
  }

  render() {
    return (
      <div>
        <Modal
          style={{ borderless: 'true', width: '40%', height: '80%' }}
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
        >
          <Modal.Header>Please Enter Your Feedback</Modal.Header>
          <Modal.Content style={{ borderless: 'true' }}>
            <FormHTMLEditor />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
