import React from 'react'
import { Label, Modal, Button, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

function InviteModal({ content, buttonText, placeholder}) {
  return (
    <div>
      <Modal
        style={{ borderless: 'true', width: '40%', height: '40%' }}
        trigger={<Button>Create new private group</Button>}
      >
        <Modal.Content style={{ borderless: 'true' }}>
          <Header
            style={{
              fontSize: '2vw',
              textAlign: 'center',
              width: '100%',
              padding: '5%',
              height: '50%',
              margin: 'auto',
            }}
          >
            {content}
          </Header>
          <div
            className="ui input"
            style={{
              textAlign: 'center',
              width: '100%',
              height: '70%',
              margin: 'auto',
              padding: '5%',
            }}
          >
            <input type="text" placeholder={placeholder} />
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
            <Button style={{ fontSize: '1vw' , width: '50%'}} positive>
              {buttonText}
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

InviteModal.propTypes = {
  content: PropTypes.node,
  buttonText: PropTypes.string,
  placeholder: PropTypes.string
}

export default InviteModal
