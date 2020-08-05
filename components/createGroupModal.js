import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Header, Search, Input } from 'semantic-ui-react'

function CreateGroupModal({ onCreate }) {
  const [name, setGroupName] = useState('')
  const [modalState, toggleModal] = useState(false)

  async function createGroup() {
    if (!name) return

    toggleModal(false)
    onCreate({ name, type: 'group' })
  }

  return (
    <div>
      <Modal
        style={{ borderless: 'true', width: '40%', height: '40%' }}
        trigger={
          <Button
            color="teal"
            icon="add"
            content="New Group"
            fluid
            style={{ fontSize: '1vw' }}
            onClick={() => toggleModal(true)}
          />
        }
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
            content={'New Private Group'}
          />

          <div
            style={{
              textAlign: 'center',
              padding: '5%',
            }}
          >
            <Input
              fluid
              placeholder="Group name"
              name="name"
              value={name}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <br />
            <br />
            <Search
              fluid
              placeholder={'Add students to your group...'}
              input={{ fluid: true }}
            />
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
              onClick={createGroup}
              content={'Create'}
            />
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

CreateGroupModal.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default CreateGroupModal
