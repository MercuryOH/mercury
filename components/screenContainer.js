import React from 'react'
import PropTypes from 'prop-types'
import Publisher from './publisher'
import _ from 'lodash'
import { EventEmitter } from './util/EventEmitter'
import { OTSubscriber, createSession } from 'opentok-react'
import { Button } from 'semantic-ui-react'

class ScreenContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ssButton: true,
      streams: [],
      focusStream: {},
      videoButton: true,
      expand: false,
      searchName: '',
      searchSession: '',
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

    EventEmitter.subscribe('newScreensharer', (msg) => {
      if (this.props.sessionId === msg.sessionId) {
        this.setState({
          focusStream: _.find(this.state.streams, { name: msg.name }),
          expand: true,
        })
      }
    })
  }

  getStreamToDisplay() {
    return this.state.expand === true && this.state.focusStream != undefined ? (
      <Button
        onDoubleClick={() => {
          this.setState({ focusStream: {} })
          this.setState({ expand: false })
        }}
        style={{
          padding: '0px',
          width: '100%',
          maxHeight: '75vh',
          margin: '0px',
          backgroundColor: 'transparent',
        }}
      >
        <OTSubscriber
          key={this.state.focusStream.id}
          session={this.sessionHelper.session}
          stream={this.state.focusStream}
          properties={{
            maxWidth: '75vw',
            maxHeight: '74.5vh',
            height: '84vh',
            width: '64vw',
            style: {
              buttonDisplayMode: 'on',
              nameDisplayMode: 'on',
            },
          }}
          onSubscribe={this.handleSubscribe}
          onError={this.handleSubscribeError}
        />
      </Button>
    ) : null
  }

  screenShareButton() {
    return this.state.ssButton === true ? (
      <Button
        onClick={() => {
          EventEmitter.publish('startScreenShare')
          this.setState({ ssButton: false })
        }}
        style={{ fontSize: '.8vw', display: 'inline-flex' }}
        icon="tv"
        content="Share Screen"
      />
    ) : (
      <Button
        onClick={() => {
          EventEmitter.publish('stopScreenShare')
          this.setState({ ssButton: true })
        }}
        icon="tv"
        style={{ fontSize: '.8vw', display: 'inline-flex' }}
        content="Stop Screen Share"
      />
    )
  }

  videoStateButton() {
    return this.state.videoButton === true ? (
      <Button
        onClick={() => {
          EventEmitter.publish('disableVideo')
        }}
        icon="hide"
        style={{ fontSize: '.8vw', display: 'inline-flex' }}
        content="Disable video"
      />
    ) : (
      <Button
        onClick={() => {
          EventEmitter.publish('enableVideo')
        }}
        icon="eye"
        style={{ fontSize: '.8vw', display: 'inline-flex' }}
        content="Enable video"
      />
    )
  }

  componentWillMount() {
    const { sessionId, token } = this.props
    this.sessionHelper = createSession({
      apiKey: `${process.env.NEXT_PUBLIC_VV_API_KEY}`,
      sessionId: `${sessionId}`,
      token: `${token}`,
      onStreamsUpdated: (streams) => {
        this.setState({ streams })
      },
    })
  }

  componentWillUnmount() {
    this.sessionHelper.disconnect()
  }

  render() {
    const { onLeave } = this.props
    return (
      <>
        <div
          style={{ display: 'inline-flex', width: '100%', maxHeight: '86vh' }}
        >
          <div style={{ width: '87%', maxHeight: '85vh', overflow: 'auto' }}>
            {this.getStreamToDisplay()}
          </div>
          <div
            style={{
              width: '13%',
              maxHeight: '85vh',
              overflow: 'auto',
              height: '1000px',
            }}
          >
            <Publisher
              style={{
                width: '9.7vw',
                maxWidth: '9.7vw',
                marginBottom: '5px',
              }}
              session={this.sessionHelper.session}
              name={this.props.name}
              profile={this.props.profile}
            />
            {this.state.streams.map((stream) => (
              <>
                <Button
                  onDoubleClick={() => {
                    this.setState({ focusStream: stream })
                    this.setState({ expand: true })
                  }}
                  style={{
                    padding: '0px',
                    width: '100%',
                    maxHeight: '15.5vh',
                    margin: '0px',
                  }}
                >
                  <OTSubscriber
                    key={stream.id}
                    session={this.sessionHelper.session}
                    stream={stream}
                    properties={{
                      width: '100%',
                      height: '15.5vh',
                      maxHeight: '15.5vh',
                      margin: '0px',
                      style: {
                        buttonDisplayMode: 'on',
                        nameDisplayMode: 'on',
                      },
                    }}
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
          onClick={()=> window.open("https://letsboard.co/", "_blank")}
          icon="square outline"
          style={{ fontSize: '.8vw', display: 'inline-flex' }}
          content="Whiteboard"
        />
        <Button
          onClick={onLeave}
          color="red"
          icon="close"
          style={{ fontSize: '.8vw', display: 'inline-flex' }}
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
