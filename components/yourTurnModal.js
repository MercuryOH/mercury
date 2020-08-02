import React, { useState } from 'react'
import { Modal, Button, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

function YourTurnModal() {
  const [modalState, toggleModal] = useState(false)

  return (
    <div>
      <Modal
        style={{ borderless: 'true', width: '40%', height: '40%' }}
        trigger={
          <Button onClick={() => toggleModal(true)}>your turn on queue</Button>
        }
        open={modalState}
        onClose={() => toggleModal(false)}
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
            Your turn!
          </Header>

          <div
            style={{
              textAlign: 'center',
              marginTop: '5%',
              padding: 30,
              flexDirection: 'row',
            }}
          >
            <Button
              color="green"
              onClick={() => toggleModal(false)}
              style={{
                fontSize: '1vw',
                textAlign: 'center',
                width: '25%',
                marginRight: '5%',
                flex: 1,
              }}
            >
              Join TA
            </Button>
            <Button
              color="teal"
              onClick={() => toggleModal(false)}
              style={{
                fontSize: '1vw',
                textAlign: 'center',
                width: '25%',
                marginRight: '5%',
                flex: 1,
              }}
            >
              Invite TA
            </Button>
            <Button
              color="red"
              onClick={() => toggleModal(false)}
              style={{
                fontSize: '1vw',
                textAlign: 'center',
                width: '25%',
                //marginLeft: '5%',
                flex: 1,
              }}
            >
              Decline
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default YourTurnModal
