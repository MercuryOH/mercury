import React, { Component } from 'react'
import { Modal, Button, Header } from 'semantic-ui-react'
import { EventEmitter } from '../util/EventEmitter'

// someone requests to join your group
export default class GroupJoinRequestModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      studentID: -1,
      studentRequestingToJoin: '',
    }

    EventEmitter.subscribe('activateGroupJoinRequestModal', (data) => {
      console.log(data)
      const { userId, fullName } = JSON.parse(data)
      console.log(fullName)
      this.setState({
        modalState: true,
        studentId: userId,
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
              {`${this.state.studentRequestingToJoin} Requests To Join`}
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
                onClick={() => this.setState({ modalState: false })}
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
                onClick={() => this.setState({ modalState: false })}
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
