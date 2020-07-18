const router = require('express').Router()

router.get('/', (req, res) => {
  res.json({
    firstName: 'John',
    lastName: 'Doe',
    message: 'This is an example...',
  })
})

module.exports = router
