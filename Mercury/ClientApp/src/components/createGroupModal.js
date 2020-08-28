import React, { useState } from 'react'
import { Modal, Button, Input } from 'semantic-ui-react'

function CreateGroupModal({ onChange }) {
  const [open, setOpen] = useState(false)
  const [groupName, setGroupName] = useState('')

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleCreateGroup = () => {
    if (!groupName) return

    onChange({ name: groupName, type: 'Group' })
    closeModal()
  }

  return (
    <Modal
      size="small"
      open={open}
      onOpen={openModal}
      onClose={closeModal}
      trigger={<Button fluid color="teal" icon="add" content="New Group" />}
    >
      <Modal.Header>Create group</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          placeholder="Group name"
          name="name"
          onChange={(e) => setGroupName(e.target.value)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button content="Cancel" onClick={closeModal} />
        <Button primary content="Create" onClick={handleCreateGroup} />
      </Modal.Actions>
    </Modal>
  )
}

export default CreateGroupModal
