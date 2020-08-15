import React, { Component } from 'react'
import { Modal, Button, Search } from 'semantic-ui-react'
import _ from 'lodash'
import { EventEmitter } from '../util/EventEmitter'
import SearchBar from './searchBar'

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
      selectedUser: {},
      me: {},
      currentGroup: { id: '', name: '' },
    }

    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('openInviteModal', (openInviteModal) => {
      this.setState({ modalState: openInviteModal })
    })

    EventEmitter.subscribe('allUsersInClass', (users) => {
      this.setState({ allUsers: users })
    })

    EventEmitter.subscribe('me', (me) => {
      this.setState({ me })
    })

    EventEmitter.subscribe('currentGroupChange', (currentGroup) => {
      this.setState({ currentGroup })
    })
  }

  formatAsResults = (user) => {
    return {
      title: user.firstName + ' ' + user.lastName,
      id: user.id,
      description: user.email,
    }
  }

  handleInvite = () => {
    this.setState({ modalState: false })
    EventEmitter.publish('openInviteModal', false)

    if (this.state.selectedUser) {
      EventEmitter.publish('sendOutInvite', {
        sender: this.state.me,
        recepientId: this.state.selectedUser.id,
        group: this.state.currentGroup,
      })
    }
  }

  handleResultSelect = (e, { result }) => {
    this.setState({
      value: result.title,
      selectedUser: result,
    })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) =>
        re.test(result.title) || re.test(result.description)

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
                placeholder="Invite student..."
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
            {/* <SearchBar /> */}

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
