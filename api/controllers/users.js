const router = require('express').Router()
const joi = require('@hapi/joi')
const models = require('../../models')
const crypto = require('../../util/crypto')
const middleware = require('../../util/middleware')

const createUserSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
})

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
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

router.post('/login', async (req, res) => {
  const { value, error } = loginSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ error })
  }

  try {
    const user = await models.User.findOne({ where: { email: value.email } })

    if (!user || !user.isPasswordMatch(value.password)) {
      throw new Error('User not found')
    }

    const token = crypto.createJWT({ id: user.id })

    return res.json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token,
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: err.message || err })
  }
})

router.get('/me', middleware.authRequired, async (req, res) => {
  return res.json({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
  })
})

router.post('/addClass', async (req, res) => {
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
