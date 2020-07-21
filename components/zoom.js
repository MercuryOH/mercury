import React, { useEffect, useState } from 'react'
import testTool from './util/testtool'
import { Button } from 'semantic-ui-react'
import NProgress from 'nprogress' //nprogress module

const API_KEY = '-VSz20FQSDeRhCs0QZShZA'
const API_SECRET = 'ZQplFu9mkmFkORDiWe1zFC65H10xw1Z11COe'

let ZoomMtg = null

function Zoom() {
  const [isZoomLoaded, setZoomLoaded] = useState(false)

  useEffect(() => {
    if (!window) return
    NProgress.start()
    ZoomMtg = require('@zoomus/websdk').ZoomMtg

    ZoomMtg.setZoomJSLib('/zoom-dist/', '/av')
    ZoomMtg.preLoadWasm()
    ZoomMtg.prepareJssdk()
    setZoomLoaded(true)
    NProgress.done()
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
        console.log(joinUrl)
        window.open(joinUrl, '_blank')
      },
    })
  }

  // if (!isZoomLoaded) {
  //   NProgress.start()
  // }

  // NProgress.done()

  return (
    <div>
      <Button onClick={startMeeting}>Join Meeting</Button>
    </div>
  )
}

export default Zoom
