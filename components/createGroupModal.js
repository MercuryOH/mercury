import React, { useState } from 'react'
import { Modal, Button, Header, Search, TextArea } from 'semantic-ui-react'
import * as api from '../util/mercuryService'
import PropTypes from 'prop-types'

function CreateGroupModal() {
  const [modalState, toggleModal] = useState(false)

  async function createGroup() {
    var groupName = 'Private Group'
    const groupNameField = document.getElementById('groupName').value
    if (groupNameField != '') groupName = groupNameField

    const postGroupResponse = await api.postGroup(2, groupName, 'group')
    console.log(postGroupResponse)
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
            <div class="ui input">
              <input type="text" placeholder="Group name" id="groupName" />
            </div>

            <br></br>
            <br></br>
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
              onClick={() => {
                toggleModal(false)
                createGroup('Default')
              }}
              content={'Create'}
            />
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

// InviteModal.propTypes = {
//   content: PropTypes.node,
//   buttonText: PropTypes.string,
//   placeholder: PropTypes.string,
// }

export default CreateGroupModal
