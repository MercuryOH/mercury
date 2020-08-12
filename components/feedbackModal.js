import React, { Component } from 'react'
import { Modal, Button, Header, Icon } from 'semantic-ui-react'
import FormHTMLEditor from './FormHTMLEditor'
import StarRatings from 'react-star-ratings'
import stripHtml from 'string-strip-html'
import * as api from '../util/mercuryService'
import { EventEmitter } from './util/EventEmitter'

export default class FeedbackModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: false,
      rating: 0,
      comment: '',
      classId: -1,
    }

    EventEmitter.subscribe('activateFeedbackModal', (classId) => {
      this.setState({ classId, modalState: true })
    })
  }

  changeRating(newRating, _name) {
    this.setState({
      rating: newRating,
    })
  }

  changeComment(comment) {
    const newComment = stripHtml(comment)
    this.setState({ comment: newComment })
  }

  async submit() {
    const { classId, rating, comment } = this.state
    await api.submitFeedback(classId, rating, comment)
    this.setState({ modalState: false })
  }

  render() {
    const { rating, modalState, comment } = this.state

    return (
      <div>
        <Modal
          style={{ borderless: 'true', width: '40%', height: '80%' }}
          open={modalState}
          onClose={() => this.setState({ modalState: false })}
          closeOnDimmerClick={false}
          closeOnEscape={false}
        >
          <Modal.Content style={{ borderless: 'true' }}>
            <Modal.Header>
              <Icon
                onClick={() => this.setState({ modalState: false })}
                style={{ float: 'right', cursor: 'pointer' }}
                name="times"
              ></Icon>
            </Modal.Header>

            <Header>Rate Your Call</Header>
            <StarRatings
              rating={rating}
              starRatedColor="blue"
              changeRating={this.changeRating.bind(this)}
              numberOfStars={5}
              name="rating"
            />

            <br />

            <Header>Provide Your Comments</Header>

            <FormHTMLEditor
              onChange={this.changeComment.bind(this)}
              defaultValue={comment}
            />
            <br />

            <Button onClick={this.submit.bind(this)}>Submit</Button>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
