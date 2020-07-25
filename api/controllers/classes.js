const router = require('express').Router()
const models = require('../../models')
const middleware = require('../../util/middleware')
/**
 * Get the classes that the current user is enrolled into
 */

router.get('/currentEnrolledClasses', middleware.authRequired, (req, res) => {
  let { ClassUsers } = models
  res.send(
    ClassUsers.findAll({
      where: {
        UserId: req.user.id,
      },
    })
  )
})

module.exports = router
