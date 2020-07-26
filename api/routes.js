const router = require('express').Router()
const users = require('./controllers/users')
const channels = require('./controllers/channels')

router.use('/users', users)
router.use('/channels', channels)
module.exports = router
