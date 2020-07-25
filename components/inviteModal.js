import React, { useState } from 'react'
import { Modal, Button, Header, Search } from 'semantic-ui-react'
import PropTypes from 'prop-types'

function InviteModal({ content, buttonText, placeholder }) {
  const [modalState, toggleModal] = useState(false)

  return (
    <div>
      <Modal
        style={{ borderless: 'true', width: '40%', height: '40%' }}
        trigger={<Button onClick={() => toggleModal(true)}>+ New Group</Button>}
        open={modalState}
        onClose={() => toggleModal(false)}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        closeIcon
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
            style={{
              textAlign: 'center',
              padding: '5%',
            }}
          >
            <Search fluid placeholder={placeholder} input={{ fluid: true }} />
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
              color="teal"
              style={{ width: '50%', fontSize: '1vw' }}
              onClick={() => toggleModal(false)}
            >
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
  placeholder: PropTypes.string,
}

export default InviteModal
