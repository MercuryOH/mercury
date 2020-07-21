const router = require('express').Router()

router.get('/', (_req, res) => {
  res.json({
    firstName: 'John',
    lastName: 'Doe',
    message: 'This is an example...',
  })
})

/**
 * Programatically create a Zoom meeting
 * Response: { meetingId, password }
 */

router.get('/createMeeting', (_req, res) => {
  res.json({
    meetingId: 'meetingId',
    password: 'passWord',
  })
})

/**
 * Get the meeting password of an associated meetingId
 * Request: { meetingId }
 * Response: { passWord }
 */

router.get('/getMeetingPassword', (req, res) => {
  res.json({
    password: 'password',
  })
})

module.exports = router
