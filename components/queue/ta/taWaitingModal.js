import React, { Component } from 'react'
import { Modal, Button, Header } from 'semantic-ui-react'
import { EventEmitter } from '../../util/EventEmitter'

export default class TaWaitingModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: false,
      studentName: '',
    }

    EventEmitter.subscribe('newTAWaitingModalProps', (nextProps) => {
      this.setState({
        modalState: nextProps.inviteNextStudent,
        studentName: nextProps.nextStudentName,
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
              {`Waiting for ${this.state.studentName} to respond...`}
            </Header>

            <div
              style={{
                textAlign: 'center',
                marginTop: '5%',
                padding: 30,
                flexDirection: 'row',
              }}
            >
              {/* <Button
                color="red"
                onClick={() => this.setState({ modalState: false })}
                style={{
                  fontSize: '1vw',
                  textAlign: 'center',
                  width: '50%',
                  //marginLeft: '5%',
                  flex: 1,
                }}
              >
                Remove
              </Button> */}
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
