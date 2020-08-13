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
    return (
      <div>
          <Publisher session={this.sessionHelper.session}/>
          {this.state.streams.map(stream => (
            <OTSubscriber
              key={stream.id}
              session={this.sessionHelper.session}
              stream={stream}
              properties={{ width: '100%', height: '50vh' }}
              onSubscribe={this.handleSubscribe}
              onError={this.handleSubscribeError}
            />
          ))}
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
