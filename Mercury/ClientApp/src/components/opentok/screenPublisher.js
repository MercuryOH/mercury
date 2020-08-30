import React, { Component } from 'react'
import { OTPublisher } from 'opentok-react'
import { EventEmitter } from '../util/EventEmitter'

export default class ScreenPublisher extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      audio: true,
      video: true,
      videoSource: 'screen',
      appear: false,
    }
    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('startScreenShare', () => {
      this.setState({ appear: true })
    })
    EventEmitter.subscribe('stopScreenShare', () => {
      this.setState({ appear: false })
    })
  }

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` })
    EventEmitter.publish('leaveCallOnError')
  }

  render() {
    return this.state.appear === false ? null : (
      <>
        {this.state.error ? (
          <div>
            {
              "We noticed you denied access to your screen. Please click the screen blocked icon in your browser's address bar, allow access, and then refresh the page and rejoin the call."
            }
          </div>
        ) : null}
        <OTPublisher
          properties={{
            width: '13.62vw',
            maxWidth: '13.62vw',
            height: '20vh',
            publishAudio: this.state.audio,
            publishVideo: this.state.video,
            videoSource: 'screen',
            name: this.props.name,
            style: {
              buttonDisplayMode: 'on',
              nameDisplayMode: 'on',
            },
          }}
          onPublish={() => {
            //THIS IS PUBLISHING TO THE WEBSOCKET
            EventEmitter.publish('screenShareOn', {
              name: this.props.name,
              sessionId: this.props.session.sessionId,
            })
          }}
          session={this.props.session}
          onError={this.onError}
        />
      </>
    )
  }
}
