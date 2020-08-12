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
      activated: true
    };
  }

  getButtonToDisplay(){
    return this.state.activated === true ? (
      <Button
        onClick = {() => {
          EventEmitter.publish('startScreenShare')
          this.setState({video: false, activated: false})
          }
        }
        content = "Share Screen"
      />
    ) : (
      <Button
          onClick = {() => {
              EventEmitter.publish('stopScreenShare')
              this.setState({video: true, activated: true})
            }
          }
          content = "Stop Screen Share"
        />
    )
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
            publishVideo: this.state.video
          }}
          onError={this.onError}
        />
        <ScreenPublisher/>
        {this.getButtonToDisplay()}
      </div>
    );
  }
}
