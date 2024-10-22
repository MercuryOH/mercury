import { Router } from 'express'
const router = Router()
import joi from 'joi'
import models from '../../models/index'
import crypto from '../../util/crypto'
import { authRequired } from '../../util/middleware'

const loginSchema = joi.object({
  email: joi.string().email().required(),
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  profile: joi.string().required(),
})

router.get('/me', authRequired, async (req: any, res: any) => {
  return res.json({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    profile: req.user.profile,
  })
})

router.post('/login', async (req, res) => {
  const { value, error } = loginSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ error })
  }

  try {
    var user = await models.User.findOne({ where: { email: value.email } })

    if (!user) {
      user = await models.User.create(value)
    }

    const token = crypto.createJWT({ id: user.id })
   
    return res.json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      profile: user.profile,
      token,
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: err.message || err })
  }
})

export default router
