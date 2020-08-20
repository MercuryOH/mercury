import React, { Component } from 'react'
import { Modal, Button, Search, Label, Icon } from 'semantic-ui-react'
import _ from 'lodash'
import { EventEmitter } from './util/EventEmitter'

const initialState = { isLoading: false, results: [], value: '' }

class GroupLeaderModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currGroup: this.props.currGroup,
      modalState: false,
      isLoading: false,
      results: [],
      value: '',
      allUsers: [],
      selectedUser: [],
    }

    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('activateGroupLeaderModal', (candidates) => {
      /** TODO:
       * 
     Please change state to display the modal and please use the list of candidate objects as things to search for
     * The candidate objects are { userId, fullName }
     Please also store the userID's of each candidate object for when a leader is appointed
     */

      console.log(candidates)
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
    EventEmitter.publish('openGroupLeaderModal', false)

    /**
     * TODO: Please publish an event called 'sendLeaderAppointmentNotification' with the data including the groupId from
     * this.state.currGroup and the userId of the selected user
     * Also, it looks like this code is not relevant to leader appointment but rather invites FYI
     */

    if (_.isEmpty(this.state.selectedUser)) return
    console.log(_.map(this.state.selectedUser, 'id'))
    EventEmitter.publish('sendOutInvite', {
      sender: this.state.me,
      recepientIds: _.map(this.state.selectedUser, 'id'),
      group: this.state.currentGroup,
    })

    this.setState({ value: '', selectedUser: [], modalState: false })
  }

  handleClose = () => {
    this.setState({ value: '', selectedUser: [], modalState: false })
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
    // if (_.isEmpty(this.state.selectedUser)) {
    //   return <></>
    // }

    // return (
    //   <div
    //     style={{
    //       textAlign: 'left',
    //       paddingLeft: 80,
    //       paddingRight: 80,
    //     }}
    //   >
    //     <Label>
    //       {this.state.selectedUser.title}
    //       <Icon
    //         name="delete"
    //         onClick={() => this.removeSelected(this.state.selectedUser)}
    //       />
    //     </Label>
    //   </div>
    // )

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
      // selectedUser: {},
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
                placeholder="Choose a new group leader..."
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
                Change Group Leader
              </Button>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default GroupLeaderModal
