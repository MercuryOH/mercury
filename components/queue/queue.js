import React, { Component } from 'react'
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
    }
  }

  componentDidMount() {
    this.courseId = Number(window.location.href.split('/')[4])

    let me = {}
    let classData = {}

    api
      .getMe()
      .then((meData) => {
        me = meData
      })
      .then(() => api.getClasses())
      .then((classPayload) => {
        classData = classPayload
      })
      .then(() => this.setState({ me, classData, isDataLoaded: true }))
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
    const { isDataLoaded, me, classData } = this.state

    if (!isDataLoaded) {
      return null
    }

    if (this.getRoleForClass() === 'Student') {
      return <StudentQueueView me={me} classData={classData} />
    }

    return <TAQueueView me={me} classData={classData} />
  }
}

export default Queue
