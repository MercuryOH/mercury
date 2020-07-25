const router = require('express').Router()
const users = require('./controllers/users')
const channels = require('./controllers/channels')
const classes = require('./controllers/classes')

router.use('/users', users)
router.use('/channels', channels)
router.use('/classes', classes)
module.exports = router
