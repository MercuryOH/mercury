import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Header, Search, Input } from 'semantic-ui-react'
import _ from 'lodash'
import { EventEmitter } from './util/EventEmitter'
import SearchBar from './invite/searchBar'

const initialState = { isLoading: false, results: [], value: '' }

class CreateGroupModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      groupName: '',
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
    EventEmitter.subscribe('allOtherStudentsInClass', (users) => {
      this.setState({ allUsers: users })
    })

    EventEmitter.subscribe('me', (me) => {
      this.setState({ me })
    })

    EventEmitter.subscribe('currentGroupChange', (currentGroup) => {
      this.setState({ currentGroup })
    })
  }

  // formatAsResults = (user) => {
  //   return {
  //     title: user.firstName + ' ' + user.lastName,
  //     id: user.id,
  //     description: user.email,
  //   }
  // }

  // handleResultSelect = (e, { result }) => {
  //   this.setState({
  //     value: result.title,
  //     selectedUser: result,
  //   })
  // }

  // handleSearchChange = (e, { value }) => {
  //   this.setState({ isLoading: true, value })

  //   setTimeout(() => {
  //     if (this.state.value.length < 1) return this.setState(initialState)

  //     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
  //     const isMatch = (result) =>
  //       re.test(result.title) || re.test(result.description)

  //     this.setState({
  //       isLoading: false,
  //       results: _.filter(
  //         this.state.allUsers.map(this.formatAsResults),
  //         isMatch
  //       ),
  //     })
  //   }, 300)
  // }

  createGroup = () => {
    if (!this.state.groupName) return
    //this.props.onInvite({ selectedUser: this.state.selectedUser })
    // if (!this.state.selectedUser) return
    // EventEmitter.publish('selectedUser', this.state.selectedUser)

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
              {/* <br />
              <br />
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
              /> */}
              {/* <SearchBar /> */}
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
