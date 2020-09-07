import React, { Component } from 'react'
import { Modal, Header, Button, Form, TextArea } from 'semantic-ui-react'
import { EventEmitter } from './util/EventEmitter'
import * as api from '../util/mercuryService'

/** Type User returned from api.getMe */
interface User {
  id: number
  firstName: string
  lastName: string
  email: string
}

interface BroadcastModalProps {}

interface BroadcastModalState {
  content: string
  modalState: boolean
  user: User
}

export default class BroadcastModal extends Component<
  BroadcastModalProps,
  BroadcastModalState
> {
  constructor(props: BroadcastModalProps) {
    super(props)
    this.state = {
      content: '',
      modalState: false,
      user: { id: -1, firstName: '', lastName: '', email: '' },
    }
  }

  componentDidMount() {
    api.getMe().then((user) => {
      this.setState({ user })
    })
  }

  render() {
    return (
      <div>
        <Modal
          style={{ border: 'none', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={() => this.setState({ modalState: false })}
          trigger={
            <Button
              color="yellow"
              icon="bullhorn"
              content="Broadcast"
              fluid
              style={{ fontSize: '1vw' }}
              onClick={() => {
                this.setState({ modalState: true, content: '' })
              }}
            />
          }
          closeOnDimmerClick={false}
          closeOnEscape={false}
          closeIcon
        >
          <Modal.Content style={{ border: 'none' }}>
            <Header
              style={{
                fontSize: '2vw',
                textAlign: 'center',
                width: '100%',
                padding: '5%',
                height: '50%',
                margin: 'auto',
              }}
              content={'Broadcast to students'}
            />

            <div
              style={{
                textAlign: 'center',
                padding: '5%',
              }}
            >
              <Form>
                <TextArea
                  placeholder="Message to broadcast..."
                  style={{
                    width: '90%',
                    height: '100%',
                    resize: 'none',
                    padding: '2%',
                    fontSize: '1vw',
                  }}
                  onInput={(
                    event: React.FormEvent<HTMLTextAreaElement>,
                    data
                  ) => {
                    this.setState({ content: data.value as string })
                  }}
                />
              </Form>
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
                color="yellow"
                style={{ width: '50%', fontSize: '1vw' }}
                onClick={() => {
                  //broadcast message
                  EventEmitter.publish('broadcastToClass', {
                    content: this.state.content,
                    sender: this.state.user,
                  })
                  this.setState({ modalState: false })
                }}
                content={'Send'}
              />
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
