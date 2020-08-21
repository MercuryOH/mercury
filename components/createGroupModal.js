import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Header, Search, Input } from 'semantic-ui-react'
import _ from 'lodash'

class CreateGroupModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      groupName: '',
    }
  }

  createGroup = () => {
    if (!this.state.groupName) return

    this.setState({ modalState: false })
    this.props.onCreate({ name: this.state.groupName, type: 'group' })
  }

  render() {
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
              onClick={() =>
                this.setState({ groupName: '', value: '', modalState: true })
              }
            />
          }
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
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
                value={this.state.groupName}
                onChange={(e) => this.setState({ groupName: e.target.value })}
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
                onClick={this.createGroup}
                content={'Create'}
              />
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

CreateGroupModal.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default CreateGroupModal
