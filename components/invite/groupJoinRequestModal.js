import React, { Component } from 'react'
import { Modal, Button, Header } from 'semantic-ui-react'
import { EventEmitter } from '../util/EventEmitter'

// someone requests to join your group
export default class GroupJoinRequestModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      studentId: -1,
      group: {},
      studentRequestingToJoin: '',
    }

    EventEmitter.subscribe('activateGroupJoinRequestModal', (data) => {
      const { userId, fullName, group } = JSON.parse(data)

      this.setState({
        modalState: true,
        studentId: userId,
        group,
        studentRequestingToJoin: fullName,
      })
    })
  }

  render() {
    return (
      <div>
        <Modal
          style={{ borderless: 'true', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
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
              {`${this.state.studentRequestingToJoin} Requests To Join ${this.state.group.name}`}
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
                color="teal"
                onClick={() => {
                  const { studentId, group } = this.state
                  EventEmitter.publish('acceptGroupJoinRequest', {
                    studentId,
                    group,
                  })
                  this.setState({ modalState: false })
                }}
                style={{
                  fontSize: '1vw',
                  textAlign: 'center',
                  width: '40%',
                  marginRight: '5%',
                  flex: 1,
                }}
              >
                Accept
              </Button>
              <Button
                color="red"
                onClick={() => {
                  const { studentId, group } = this.state
                  EventEmitter.publish('declineGroupJoinRequest', {
                    studentId,
                    group,
                  })
                  this.setState({ modalState: false })
                }}
                style={{
                  fontSize: '1vw',
                  textAlign: 'center',
                  width: '40%',
                  marginLeft: '5%',
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
}
