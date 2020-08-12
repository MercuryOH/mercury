import React from 'react'
import PropTypes from 'prop-types'
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react'
import { Button, List } from 'semantic-ui-react'

class Vonage extends React.Component {
  constructor(props) {
    super(props)

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
    this.parentNode.style.display = 'inline-flex'
    this.parentNode.parentNode.style.display = 'inline-flex'
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

  render() {
    const { sessionId, token, onLeave } = this.props

    return (
      <div>
        <OTSession
          apiKey={process.env.NEXT_PUBLIC_VV_API_KEY}
          sessionId={sessionId}
          token={token}
          eventHandlers={this.sessionEventHandlers}
          onError={this.handleSessionError}
        >
          <OTPublisher
            properties={{ publishAudio: true, width: '100%', height: '50vh', videoSource: 'screen' }}
            onPublish={this.handlePublish}
            eventHandlers={this.publishEventHandlers}
            onError={this.handlePublishError}
          />
          <OTStreams style={{ display: 'inline-flex' }}>
            <OTSubscriber
              properties={{ width: '100%', height: '50vh' }}
              onSubscribe={this.handleSubscribe}
              onError={this.handleSubscribeError}
            />
          </OTStreams>
          <Button
            onClick={onLeave}
            color="red"
            icon="close"
            content="Leave call"
          />
        </OTSession>
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
