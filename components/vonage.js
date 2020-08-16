import React from 'react'
import PropTypes from 'prop-types'
import Publisher from './publisher'
import { EventEmitter } from './util/EventEmitter'
import { OTSession, OTPublisher, OTStreams, OTSubscriber, createSession } from 'opentok-react'
import { Button, List } from 'semantic-ui-react'

class Vonage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ssButton: true,
      streams: []
    }

    this.sessionEventHandlers = {
      sessionConnected: () => {},
      sessionDisconnected: () => {},
      sessionReconnected: () => {},
      sessionReconnecting: () => {},
    }

    this.publishEventHandlers = {
      accessDenied: () => {},
      streamCreated: () => {},
      streamDestroyed: () => {},
    }

    this.subscribeEventHandlers = {
      videoEnabled: () => {},
      videoDisabled: () => {},
    }

    const { sessionId, token, onLeave } = this.props
  }

  handlePublish = () => {
    console.log('Successfully published!')
  }

  handleSubscribe = () => {
    console.log('Subscribed!')
  }

  handleSessionError = (error) => {
    console.error(error)
  }

  handlePublishError = (error) => {
    console.error(error)
  }

  handleSubscribeError = (error) => {
    console.error(error)
  }

  screenShareButton() {
    return this.state.ssButton === true ? (
      <Button
        onClick = {() => {
          EventEmitter.publish('startScreenShare')
          EventEmitter.publish('disableVideo')
          this.setState({ssButton: false})
          }
        }
        style = {{fontSize: '.8vw', display: 'inline-flex'}}
        content = "Share Screen"
      />
    ) : (
      <Button
          onClick = {() => {
              EventEmitter.publish('stopScreenShare')
              EventEmitter.publish('enableVideo')
              this.setState({ssButton: true})
            }
          }
          style = {{fontSize: '.8vw', display: 'inline-flex'}}
          content = "Stop Screen Share"
        />
    )
  }

  componentWillMount() {
    const { sessionId, token, onLeave } = this.props
    this.sessionHelper = createSession({
      apiKey: `${process.env.NEXT_PUBLIC_VV_API_KEY}`,
      sessionId: `${sessionId}`,
      token: `${token}`,
      onStreamsUpdated: streams => { this.setState({ streams }); }
    });
  }

  componentWillUnmount() {
    this.sessionHelper.disconnect();
  }

  render() {
    const { sessionId, token, onLeave } = this.props
    const initLayoutContainer = require('opentok-layout-js');
    const options = {
      maxRatio: 3/2,             // The narrowest ratio that will be used (default 2x3)
      minRatio: 9/16,            // The widest ratio that will be used (default 16x9)
      fixedRatio: false,         // If this is true then the aspect ratio of the video is maintained and minRatio and maxRatio are ignored (default false)
      alignItems: 'center',      // Can be 'start', 'center' or 'end'. Determines where to place items when on a row or column that is not full
      bigClass: "OT_big",        // The class to add to elements that should be sized bigger
      bigPercentage: 0.8 ,        // The maximum percentage of space the big ones should take up
      bigFixedRatio: false,      // fixedRatio for the big ones
      bigAlignItems: 'center',   // How to align the big items
      smallAlignItems: 'center', // How to align the small row or column of items if there is a big one
      maxWidth: Infinity,        // The maximum width of the elements
      maxHeight: Infinity,       // The maximum height of the elements
      smallMaxWidth: Infinity,   // The maximum width of the small elements
      smallMaxHeight: Infinity,  // The maximum height of the small elements
      bigMaxWidth: Infinity,     // The maximum width of the big elements
      bigMaxHeight: Infinity,    // The maximum height of the big elements
      bigMaxRatio: 3/2,          // The narrowest ratio to use for the big elements (default 2x3)
      bigMinRatio: 9/16,         // The widest ratio to use for the big elements (default 16x9)
      bigFirst: true,
    };
    const layout = initLayoutContainer(options);
    const boxes = layout.getLayout(this.state.streams.map((stream) => ({
      width: stream.videoDimensions.width,
      height: stream.videoDimensions.height,
      big: stream.videoType === 'screen'
    })
  ));
    return (
      <div>
        <Publisher session={this.sessionHelper.session}/>
        <div style = {{backgroundColor: 'lightblue', width: '100%', maxHeight: '40vh'}}>
          {this.state.streams.map((stream, idx) => (
            <div key={stream.id} style={{width: '100%', maxHeight: '40vh', top: boxes[idx].top, left: boxes[idx].left, width: boxes[idx].width, height: boxes[idx].height, display: 'inline-flex'}}>
              <OTSubscriber
                session={this.sessionHelper.session}
                stream={stream}
                className="subscriber-video-stream"
                properties={{ showControls: false, display: 'inline-flex' }}
                onSubscribe = {this.handleSubscribe}
                onError = {this.handleSubscribeError} />
            </div>
          ))}
          </div>
          {this.screenShareButton()}
          <Button
            onClick={onLeave}
            color="red"
            icon="close"
            style = {{fontSize: '.8vw', display: 'inline-flex'}}
            content="Leave call"
          />
      </div>
    )
  }
}


Vonage.propTypes = {
  sessionId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  onLeave: PropTypes.func.isRequired,
}

export default Vonage
