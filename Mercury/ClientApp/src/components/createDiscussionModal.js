import React, { useState } from 'react'
import { Modal, Button, Input } from 'semantic-ui-react'

function CreateDiscussionModal({ onChange }) {
  const [open, setOpen] = useState(false)
  const [discussionName, setdiscussionName] = useState('')

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleCreateDiscussion = () => {
    if (!discussionName) return

    onChange({ name: discussionName, type: 'Discussion' })
    closeModal()
  }

  return (
    <Modal
      size="small"
      open={open}
      onOpen={openModal}
      onClose={closeModal}
      trigger={
        <Button fluid color="teal" icon="add" content="New Discussion" />
      }
    >
      <Modal.Header>Create discussion</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          placeholder="Group name"
          name="name"
          onChange={(e) => setdiscussionName(e.target.value)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button content="Cancel" onClick={closeModal} />
        <Button primary content="Create" onClick={handleCreateDiscussion} />
      </Modal.Actions>
    </Modal>
  )
}

export default CreateDiscussionModal
