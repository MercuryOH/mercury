import React, { useState } from 'react'
import { Modal, Button, Header, Search } from 'semantic-ui-react'
import PropTypes from 'prop-types'

function StudentInviteModal({ content, buttonText, placeholder }) {
  const [modalState, toggleModal] = useState(true)

  return (
    <div>
      <Modal
        style={{ borderless: 'true', width: '40%', height: '40%' }}
        trigger={<Button onClick={() => toggleModal(true)}>Invite to Group</Button>}
        open={modalState}
        onClose={() => toggleModal(false)}
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
            <Search fluid placeholder={placeholder} input={{ fluid: true }} />
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

StudentInviteModal.propTypes = {
  content: PropTypes.node,
  buttonText: PropTypes.string,
  placeholder: PropTypes.string,
}

export default StudentInviteModal
