const router = require('express').Router()
const middleware = require('../../util/middleware')

router.get('/', middleware.authRequired, async (req, res) => {
  const classes = req.user.Classes.map((c) => ({
    id: c.id,
    name: c.name,
    role: c.ClassUser.role,
  }))

  return res.json(classes)
})

module.exports = router
