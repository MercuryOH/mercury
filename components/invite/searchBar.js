import React, { Component } from 'react'
import { Modal, Button, Search } from 'semantic-ui-react'
import _ from 'lodash'
import { EventEmitter } from '../util/EventEmitter'

const initialState = { isLoading: false, results: [], value: '' }

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      results: [],
      value: '',
      allUsers: [],
    }

    EventEmitter.subscribe('allUsersInClass', (users) => {
      this.setState({ allUsers: users })
    })
  }

  formatAsResults = (user) => {
    
    return {
      title: user.email,
      id: user.id,
      description: user.firstName + ' ' + user.lastName,
    }
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
    return (
      // <div
      //   style={{
      //     textAlign: 'center',
      //     padding: 80,
      //   }}
      // >
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
      // </div>
    )
  }
}

export default SearchBar
