import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Header, Search, Input } from 'semantic-ui-react'

function ModifyDiscussionModal({ onCreate }) {
  const [name, setDiscussionName] = useState('')
  const [modalState, toggleModal] = useState(false)

  async function createDiscussion() {
    if (!name) return

    toggleModal(false)
    onCreate({ name, type: 'discussion' })
  }

  return (
    <div>
      <Modal
        style={{ borderless: 'true', width: '40%', height: '40%' }}
        trigger={
          <Button
            color="teal"
            content="Modify Discussions"
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
            content={'New Discussion'}
          />

          <div
            style={{
              textAlign: 'center',
              padding: '5%',
            }}
          >
            <Input
              placeholder="Discussion name"
              name="name"
              value={name}
              onChange={(e) => setDiscussionName(e.target.value)}
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
              onClick={createDiscussion}
              content={'Create'}
            />
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

ModifyDiscussionModal.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default ModifyDiscussionModal
