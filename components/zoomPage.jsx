import React, { Component } from 'react'
import testTool from './util/testtool'
import { Button } from 'semantic-ui-react'
import { ZoomMtg } from '@zoomus/websdk'

// ZoomMtg.preLoadWasm()
// ZoomMtg.prepareJssdk()

const API_KEY = '-VSz20FQSDeRhCs0QZShZA'
const API_SECRET = 'ZQplFu9mkmFkORDiWe1zFC65H10xw1Z11COe'

export default class ZoomPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isComponentMounted: false,
    }
  }

  componentDidMount() {
    let isComponentMounted = true
    this.setState({ isComponentMounted })
  }

  startMeeting(e) {
    e.preventDefault()
    console.log(ZoomMtg)
    const meetingConfig = testTool.getMeetingConfig()
    testTool.setCookie('meeting_number', meetingConfig.mn)
    testTool.setCookie('meeting_pwd', meetingConfig.pwd)

    const signature = zoomSDK.ZoomMtg.generateSignature({
      meetingNumber: meetingConfig.mn,
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      role: meetingConfig.role,
      success: function (res) {
        console.log(res.result)
        meetingConfig.signature = res.result
        meetingConfig.apiKey = API_KEY
        const joinUrl = '/meeting.html?' + testTool.serialize(meetingConfig)
        console.log(joinUrl)
        window.open(joinUrl, '_blank')
      },
    })
  }

  render() {
    if (!this.state.isComponentMounted) {
      return null
    }

    return (
      <div>
        <Button onClick={this.startMeeting.bind(this)}>Join Meeting</Button>
      </div>
    )
  }
}
