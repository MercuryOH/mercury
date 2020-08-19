import React, { Component } from 'react'
import ScreenPublisher from './screenPublisher'
import { OTPublisher } from 'opentok-react'
import { EventEmitter } from './util/EventEmitter'

export default class Publisher extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      audio: true,
      video: true,
    }
    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('disableVideo', () => {
      this.setState({ video: false })
      EventEmitter.publish('disableVideoButton')
    })
    EventEmitter.subscribe('enableVideo', () => {
      this.setState({ video: true })
      EventEmitter.publish('enableVideoButton')
    })
  }

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` })
  }

  render() {
    return (
      <div>
        {this.state.error ? <div>{this.state.error}</div> : null}
        <OTPublisher
          properties={{
            width: '13.57vw',
            maxWidth: '13.57vw',
            maxHeight: '8vh',
            publishVideo: this.state.video,
            marginBottom: '5px',
          }}
          session={this.props.session}
          onError={this.onError}
        />
        <ScreenPublisher
          style={{
            width: '13.62vw',
            maxWidth: '13.62vw',
            height: '500px',
            maxHeight: '16vh',
            marginBottom: '5px',
          }}
          session={this.props.session}
        />
      </div>
    )
  }
}
