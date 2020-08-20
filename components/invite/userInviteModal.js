import React, { Component } from 'react'
import { Modal, Button, Search, Label, Icon } from 'semantic-ui-react'
import _ from 'lodash'
import { EventEmitter } from '../util/EventEmitter'
import SearchBar from './searchBar'

const initialState = { isLoading: false, results: [], value: '' }

class UserInviteModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      isLoading: false,
      results: [],
      value: '',
      allUsers: [],
      selectedUser: [],
      me: {},
      currentGroup: { id: '', name: '' },
    }

    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('openInviteModal', (openInviteModal) => {
      this.setState({ modalState: openInviteModal })
    })

    EventEmitter.subscribe('me', (me) => {
      this.setState({ me })
    })

    EventEmitter.subscribe(
      this.state.me.role === 'Student'
        ? 'allOtherStudentsInClass'
        : 'allOtherTAsInClass',
      (users) => {
        this.setState({ allUsers: users })
      }
    )

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
    EventEmitter.publish('openInviteModal', false)

    if (_.isEmpty(this.state.selectedUser)) return

    EventEmitter.publish('sendOutInvite', {
      sender: this.state.me,
      recepientIds: _.map(this.state.selectedUser, 'id'),
      group: this.state.currentGroup,
    })

    this.setState({ value: '', selectedUser: [], modalState: false })
  }

  handleClose = () => {
    this.setState({ value: '', selectedUser: [], modalState: false })
    EventEmitter.publish('openInviteModal', false)
  }

  handleResultSelect = (e, { result }) => {
    const filtered = this.state.selectedUser.filter(
      (user) => user.id !== result.id
    )
    filtered.push(result)
    this.setState({
      value: '',
      selectedUser: filtered,
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

  getSelectedLabels() {
    if (_.isEmpty(this.state.selectedUser)) {
      return <></>
    }

    return (
      <div
        style={{
          textAlign: 'left',
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        {this.state.selectedUser.map((user) => (
          <Label>
            {user.title}
            <Icon name="delete" onClick={() => this.removeSelected(user)} />
          </Label>
        ))}
      </div>
    )
  }

  removeSelected = (user) => {
    this.setState({
      selectedUser: this.state.selectedUser.filter((u) => u.id !== user.id),
    })
  }

  render() {
    return (
      <div>
        <Modal
          style={{ borderless: 'true', width: '40%', height: '40%' }}
          open={this.state.modalState}
          onClose={this.handleClose}
          closeOnDimmerClick={false}
          closeOnEscape={false}
          closeIcon
        >
          <Modal.Content style={{ borderless: 'true' }}>
            <div
              style={{
                textAlign: 'center',
                paddingTop: 80,
                paddingLeft: 80,
                paddingRight: 80,
                paddingBottom: 20,
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

            {this.getSelectedLabels()}

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

export default UserInviteModal
