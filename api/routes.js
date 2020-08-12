const router = require('express').Router()
const users = require('./controllers/users')
const classes = require('./controllers/classes')
const groups = require('./controllers/groups')
const feedback = require('./controllers/feedback')

router.use('/users', users)
router.use('/classes', classes)
router.use('/classes/:classId/groups', groups)
router.use('/feedback', feedback)

module.exports = router
