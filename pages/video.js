import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react'
import React, { Component } from 'react'

export default class MyApp extends Component {
  render() {
    return (
      <OTSession
        apiKey="46858704"
        sessionId="2_MX40Njg1ODcwNH5-MTU5NTgwODMzNDIzOH5RUk9uQjRqRzg4VEdWUEwwOVJEVTA3UnF-UH4"
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
