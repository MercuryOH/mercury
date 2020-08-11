import React, { Component } from 'react'
import FeedbackModal from '../components/feedbackModal'
import { AuthRequired } from '../components/authProvider'

class Feedback extends Component {
  render() {
    return <FeedbackModal classId={2} />
  }
}

export default AuthRequired(Feedback)
