import React, { Component } from 'react'
import { OTPublisher } from 'opentok-react'
import { Button } from 'semantic-ui-react'

export default class Publisher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true,
      videoSource: 'camera'
    };
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
            width: '100%',
            height: '50vh',
            publishAudio: this.state.audio,
            publishVideo: this.state.video,
            videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined
          }}
          onError={this.onError}
        />
        <Button
            onClick = {() => {
              if (`${this.state.videoSource}` != 'screen') {
                this.setState({videoSource: 'screen'})
                console.log(`${this.state.videoSource}`)
              }
            }}
            content = "Share Screen"
          />
          <Button
            onClick = {() => {
              if (`${this.state.videoSource}` != 'camera') {
                this.setState({videoSource: 'camera'})
                console.log(`${this.state.videoSource}`)
              }
            }}
            content = "Share Camera"
          />
      </div>
    );
  }
}
