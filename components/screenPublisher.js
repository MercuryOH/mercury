import React, { Component } from 'react'
import { OTPublisher } from 'opentok-react'
import { Button } from 'semantic-ui-react'
import { EventEmitter } from './util/EventEmitter'

export default class ScreenPublisher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true,
      videoSource: 'screen',
      appear: false
    };
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
    this.setState({ error: `Failed to publish: ${err.message}` });
  }

  render() {
    return this.state.appear === false ? null : (
      <div>
        {this.state.error ? <div>{this.state.error}</div> : null}
        <OTPublisher
          properties={{
            width: '100%',
            height: '50vh',
            publishAudio: this.state.audio,
            publishVideo: this.state.video,
            videoSource: 'screen'
          }}
          onError={this.onError}
        />
      </div>
    );
  }
}