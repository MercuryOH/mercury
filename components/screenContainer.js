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
      focusKey: ''
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
        properties={{ maxWidth: '75vw', maxHeight: '75vh', height: '85vh', width: '45vw' }}
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
    return (
      <>
      <div style = {{display: 'inline-flex', width: '100%', maxHeight: '85vh'}}>
        <div style = {{ width: '75%', maxHeight: '85vh', overflow: 'auto'}}>
          {this.getStreamToDisplay()}
        </div>
        <div style = {{width: '25%', maxHeight: '85vh', overflow: 'auto', height: '1000px'}}>
          <Publisher style = {{width: '15vw'}} session={this.sessionHelper.session}/>
          {this.state.streams.map((stream) => (
            <>
            <OTSubscriber
              key={stream.id}
              session={this.sessionHelper.session}
              stream={stream}
              properties={{ width: '100%', maxHeight: '10vh' }}
              onSubscribe={this.handleSubscribe}
              onError={this.handleSubscribeError}
            />
            {this.expandButton(stream)}
            </>
          ))}
        </div>
      </div>
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
