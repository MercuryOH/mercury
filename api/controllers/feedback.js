const router = require('express').Router()
const middleware = require('../../util/middleware')
const models = require('../../models')

router.post('/', middleware.authRequired, async (req, res) => {
  const { id: UserId } = req.user
  const { ClassId, stars, comments } = req.body

  await models.Feedback.create({
    stars,
    ClassId,
    comments,
    UserId,
  })

  return res.status(200).json({ UserId }) // dummy return for now
})

module.exports = router
