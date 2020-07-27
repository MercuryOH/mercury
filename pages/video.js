import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react'
import React, { Component } from 'react'

export default class MyApp extends Component {
  render() {
    return (
      <OTSession
        apiKey="46858704"
        sessionId="your-session-id"
        token="your-session-token"
      >
        <OTPublisher />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
    )
  }
}
