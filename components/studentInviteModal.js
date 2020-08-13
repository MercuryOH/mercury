import React, { Component } from 'react'
import { Modal, Button, Search } from 'semantic-ui-react'
import _ from 'lodash'
import { EventEmitter } from './util/EventEmitter'

const initialState = { isLoading: false, results: [], value: '' }

class StudentInviteModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      isLoading: false,
      results: [],
      value: '',
      allUsers: [],
    }

    EventEmitter.subscribe('openInviteModal', (openInviteModal) => {
      this.setState({ modalState: openInviteModal })
    })

    EventEmitter.subscribe('allUsersInClass', (users) => {
      this.setState({ allUsers: users })
    })
  }

  formatAsResults = (user) => {
    console.log({ title: user.email, ...user })
    return {
      title: user.email,
      id: user.id,
      description: user.firstName + ' ' + user.lastName,
    }
  }

  handleInvite = () => {
    this.setState({ modalState: false })
    EventEmitter.publish('openInviteModal', false)
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(
          this.state.allUsers.map(this.formatAsResults),
          isMatch
        ),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <div>
        <Modal
          style={{ borderless: 'true', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={this.handleInvite}
          closeOnDimmerClick={false}
          closeOnEscape={false}
          closeIcon
        >
          <Modal.Content style={{ borderless: 'true' }}>
            <div
              style={{
                textAlign: 'center',
                padding: 80,
              }}
            >
              <Search
                fluid
                placeholder="Invite students..."
                input={{ fluid: true }}
                loading={this.state.isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                  leading: true,
                })}
                results={this.state.results}
                value={this.state.value}
              />
            </div>

            <div
              style={{
                textAlign: 'center',
                width: '70%',
                height: '70%',
                margin: 'auto',
                padding: 30,
              }}
            >
              <Button
                color="teal"
                style={{ width: '50%', fontSize: '1vw' }}
                onClick={this.handleInvite}
              >
                Invite
              </Button>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default StudentInviteModal
