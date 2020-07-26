const router = require('express').Router({ mergeParams: true })
const joi = require('@hapi/joi')
const models = require('../../models')
const middleware = require('../../util/middleware')

const createGroupSchema = joi.object({
  name: joi.string().required(),
  type: joi.string().valid('group', 'discussion').required(),
})

router.post('/', middleware.authRequired, async (req, res) => {
  const { value, error } = createGroupSchema.validate(req.body)
  const { classId: ClassId } = req.params

  if (error) {
    return res.status(400).json({ error })
  }

  try {
    const group = await models.Group.create({
      name: value.name,
      type: value.type,
      ClassId,
    })

    return res.json(group)
  } catch (err) {
    return res.status(400).json({ error: err.message || err })
  }
})

module.exports = router
