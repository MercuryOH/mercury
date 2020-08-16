import React, { Component } from 'react'
import ScreenPublisher from './screenPublisher'
import { OTPublisher } from 'opentok-react'
import { Button } from 'semantic-ui-react'
import { EventEmitter } from './util/EventEmitter'

export default class Publisher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true,
    };
    this.defineEventEmitterCallbacks()
  }

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('disableVideo', () => {
      this.setState({ video: false })
    })
    EventEmitter.subscribe('enableVideo', () => {
      this.setState({ video: true })
    })
  }

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` });
  }

  render() {
    return (
      <div>
        {this.state.error ? <div>{this.state.error}</div> : null}
        <OTPublisher
          properties={{
            width: '15vw',
            maxHeight: '10vh',
            publishVideo: this.state.video
          }}
          session = {this.props.session}
          onError={this.onError}
        />
        <ScreenPublisher
        style = {{
          width: '15vw',
          height: '500px',
          maxHeight: '20vh'
        }}
        session = {this.props.session}/>
      </div>
    );
  }
}
