import React from 'react'
import PropTypes from 'prop-types'
import Publisher from './publisher'
import { EventEmitter } from './util/EventEmitter'
import { OTSession, OTPublisher, OTStreams, OTSubscriber, createSession } from 'opentok-react'
import { Button, List } from 'semantic-ui-react'

class ScreenContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ssButton: true,
      streams: [],
      focusStream: {},
      videoButton: true
    }

    this.defineEventEmitterCallbacks()

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

  defineEventEmitterCallbacks() {
    EventEmitter.subscribe('disableVideoButton', () => {
      this.setState({ videoButton: false })
    })
    EventEmitter.subscribe('enableVideoButton', () => {
      this.setState({ videoButton: true })
    })
  }

  expandButton(stream) {
    return (
      <Button
        content ='Expand'
        onClick = {() => {this.setState({focusStream: stream})}}
        style = {{fontSize: '.5vw'}}
      />
    )
  }

  getStreamToDisplay(){
    return this.state.focusStream != undefined ?(
      <OTSubscriber
        key={this.state.focusStream.id}
        session={this.sessionHelper.session}
        stream={this.state.focusStream}
        properties={{ maxWidth: '75vw', maxHeight: '75vh', height: '85vh', width: '48vw' }}
        onSubscribe={this.handleSubscribe}
        onError={this.handleSubscribeError}
      />
    ) : null
  }

  screenShareButton() {
    return this.state.ssButton === true ? (
      <Button
        onClick = {() => {
          EventEmitter.publish('startScreenShare')
          this.setState({ssButton: false})
          }
        }
        style = {{fontSize: '.8vw', display: 'inline-flex'}}
        icon = 'tv'
        content = "Share Screen"
      />
    ) : (
      <Button
          onClick = {() => {
              EventEmitter.publish('stopScreenShare')
              this.setState({ssButton: true})
            }
          }
          icon = 'tv'
          style = {{fontSize: '.8vw', display: 'inline-flex'}}
          content = "Stop Screen Share"
        />
    )
  }

  videoStateButton() {
    return this.state.videoButton === true ? (
      <Button
        onClick={() => {
          EventEmitter.publish('disableVideo')
        }}
        icon='hide'
        style = {{fontSize: '.8vw', display: 'inline-flex'}}
        content="Disable video"
      />
    ) : (
      <Button
        onClick={() => {
          EventEmitter.publish('enableVideo')
        }}
        icon='eye'
        style = {{fontSize: '.8vw', display: 'inline-flex'}}
        content="Enable video"
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
    return (
      <>
      <div style = {{display: 'inline-flex', width: '100%', maxHeight: '86vh'}}>
        <div style = {{ width: '78%', maxHeight: '85vh', overflow: 'auto'}}>
          {this.getStreamToDisplay()}
        </div>
        <div style = {{width: '22%', maxHeight: '85vh', overflow: 'auto', height: '1000px'}}>
          <Publisher style = {{width: '13.57vw', maxWidth: '13.57vw', marginBottom: '5px'}} session={this.sessionHelper.session}/>
          {this.state.streams.map((stream) => (
            <>
            <Button
            onClick = {() => {this.setState({focusStream: stream})}}
            style = {{padding: '0px', width: '100%', maxHeight: '18vh', margin: '0px'}}
            >
            <OTSubscriber
              key={stream.id}
              session={this.sessionHelper.session}
              stream={stream}
              properties={{ width: '100%', height: '18vh', maxHeight: '18vh', margin: '0px' }}
              onSubscribe={this.handleSubscribe}
              onError={this.handleSubscribeError}
            />
            </Button>
            </>
          ))}
        </div>
      </div>
      {this.videoStateButton()}
      {this.screenShareButton()}
      <Button
        onClick={onLeave}
        color="red"
        icon="close"
        style = {{fontSize: '.8vw', display: 'inline-flex'}}
        content="Leave call"
      />
      </>
    )
  }
}


ScreenContainer.propTypes = {
  sessionId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  onLeave: PropTypes.func.isRequired,
}

export default ScreenContainer
