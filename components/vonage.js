import React from 'react'
import PropTypes from 'prop-types'
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react'
import { Button } from 'semantic-ui-react'

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
        <Button
          onClick={onLeave}
          color="red"
          icon="close"
          content="Leave call"
        />
        <OTSession
          apiKey={process.env.NEXT_PUBLIC_VV_API_KEY}
          sessionId={sessionId}
          token={token}
          eventHandlers={this.sessionEventHandlers}
          onError={this.handleSessionError}
        >
          <OTPublisher
            properties={{ publishAudio: true, width: 250, height: 250 }}
            onPublish={this.handlePublish}
            eventHandlers={this.publishEventHandlers}
            onError={this.handlePublishError}
          />
          <OTStreams>
            <OTSubscriber
              properties={{ width: 400, height: 400 }}
              onSubscribe={this.handleSubscribe}
              onError={this.handleSubscribeError}
            />
          </OTStreams>
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
