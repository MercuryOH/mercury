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
    EventEmitter.publish('leaveCallOnError')
  }

  render() {
    return (
      <div>
        {this.state.error ? <div>{"We noticed you denied access to your microphone or camera. Please click the camera/microphone blocked icon in your browser's address bar, allow access, and then refresh the page and rejoin the call. You will be able to mute yourself or disable your video once you join a call."}</div> : null}
        <OTPublisher
          properties={{
            width: '9.7vw',
            maxWidth: '9.7vw',
            height: '15.5vh',
            maxHeight: '15.5vh',
            publishVideo: this.state.video,
            marginBottom: '5px',
            name: this.props.name,
            style: {
              buttonDisplayMode: 'on',
              nameDisplayMode: 'on',
              backgroundImageURI: this.props.profile
            }
          }}
          session={this.props.session}
          onError={this.onError}
        />
        <ScreenPublisher
          style={{
            width: '9.7vw',
            maxWidth: '9.7vw',
            height: '15.5vh',
            maxHeight: '16vh',
            marginBottom: '5px',
          }}
          session={this.props.session}
          name = {this.props.name + "'s Screen"}
        />
      </div>
    )
  }
}
