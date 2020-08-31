import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

function YourTurnModal({ open, onJoinTA, onDecline }) {
  return (
    <Modal size="small" open={open}>
      <Modal.Header>It's your turn!</Modal.Header>
      <Modal.Content>
        <Button.Group fluid size="large">
          <Button primary content="Join TA" onClick={onJoinTA} />
          <Button color="red" content="Decline" onClick={onDecline} />
        </Button.Group>
      </Modal.Content>
    </Modal>
  )
}

export default YourTurnModal
