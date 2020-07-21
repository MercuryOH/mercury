const router = require('express').Router()
const joi = require('@hapi/joi')
const models = require('../../models')

const createUserSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8),
})

router.post('/', async (req, res) => {
  const { value, error } = createUserSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ error })
  }

  try {
    const existingUser = await models.User.findOne({
      where: { email: value.email },
    })

    if (existingUser) {
      throw new Error('User with such email already exists')
    }

    const user = await models.User.create(value)

    return res.json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    })
  } catch (err) {
    return res.status(400).json({ error: err.message || err })
  }
})

module.exports = router
