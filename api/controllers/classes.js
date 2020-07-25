const router = require('express').Router()
const models = require('../../models')
const middleware = require('../../util/middleware')
/**
 * Get the classes that the current user is enrolled into
 */

router.get('/myClasses', middleware.authRequired, async (req, res) => {
  let { ClassUser } = models
  res.send(
    await ClassUser.findAll({
      where: {
        UserId: req.user.id,
      },
    })
  )
})

module.exports = router
