const router = require('express').Router()
const models = require('../../models')
const middleware = require('../../util/middleware')
/**
 * Get the classes that the current user is enrolled into
 */

router.get('/', middleware.authRequired, async (req, res) => {
  const classes = req.user.Classes.map((c) => ({
    id: c.id,
    name: c.name,
    role: c.ClassUser.role,
  }))

  return res.json(classes)
})

module.exports = router
