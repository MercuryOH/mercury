import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as api from '../../util/mercuryService'
import StudentQueueView from './student/studentQueueView'
import TAQueueView from './ta/taQueueView'

class Queue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDataLoaded: false,
      me: {},
      classData: [],
      office: {},
    }
  }

  componentDidMount() {
    this.courseId = Number(window.location.href.split('/')[4])

    let me = {}
    let classData = {}
    let office = {}

    api
      .getMe()
      .then((meData) => {
        me = meData
      })
      .then(() => api.getClasses())
      .then((classPayload) => {
        classData = classPayload
      })

      .then(() => api.getClass(this.courseId))
      .then((cclass) => {
        office = cclass.groups.find((group) => group.type === 'office')
      })

      .then(() => this.setState({ me, classData, office, isDataLoaded: true }))
  }

  getRoleForClass() {
    const { classData } = this.state
    let userRole = null

    classData.forEach((row) => {
      let { id, role } = row
      if (this.courseId === Number(id)) {
        userRole = role
      }
    })

    return userRole
  }

  render() {
    const { isDataLoaded, me, classData, office } = this.state

    if (!isDataLoaded) {
      return null
    }

    if (this.getRoleForClass() === 'Student') {
      return (
        <StudentQueueView
          me={me}
          classData={classData}
          onJoin={this.props.onJoin}
          office={office}
        />
      )
    }

    return <TAQueueView me={me} classData={classData} />
  }
}

Queue.propTypes = {
  onJoin: PropTypes.func.isRequired,
}

export default Queue
