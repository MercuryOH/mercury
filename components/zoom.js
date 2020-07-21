import React, { useEffect, useState } from 'react'
import testTool from './util/testtool'
import { Button } from 'semantic-ui-react'
import NProgress from 'nprogress'

// Need to refactor this into the .env file
const API_KEY = '-VSz20FQSDeRhCs0QZShZA'
const API_SECRET = 'ZQplFu9mkmFkORDiWe1zFC65H10xw1Z11COe'

let ZoomMtg = null

function Zoom() {
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    if (!window) return
    NProgress.start() // start the loading bar
    ZoomMtg = require('@zoomus/websdk').ZoomMtg
    ZoomMtg.setZoomJSLib('/zoom-dist/', '/av') // set the zoom directory
    ZoomMtg.preLoadWasm()
    ZoomMtg.prepareJssdk()
    NProgress.done() // end the loading bar
    setZoom(true)
  }, [])

  const startMeeting = () => {
    const meetingConfig = testTool.getMeetingConfig()
    testTool.setCookie('meeting_number', meetingConfig.mn)
    testTool.setCookie('meeting_pwd', meetingConfig.pwd)

    ZoomMtg.generateSignature({
      meetingNumber: meetingConfig.mn,
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      role: meetingConfig.role,
      success: function (res) {
        console.log(res.result)
        meetingConfig.signature = res.result
        meetingConfig.apiKey = API_KEY
        var joinUrl = '/meeting.html?' + testTool.serialize(meetingConfig)
        window.open(joinUrl, '_blank')
      },
    })
  }

  if (!zoom) {
    return null
  }

  return (
    <div>
      <Button
        icon={'headphones'}
        onClick={startMeeting}
        content={'Join Meeting'}
        primary
      />
    </div>
  )
}

export default Zoom
