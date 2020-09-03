import crypto from './crypto'
import models from '../models/index'

const authRequired = async (req: any, res: any, next: any) => {
  let bearerToken = req.headers.authorization

  if (!bearerToken) {
    return res.status(400).json({ error: 'Bearer token is missing' })
  }

  // Authorization tokens take the shape of: "bearer actual-jwt-here"
  bearerToken = bearerToken.replace('Bearer ', '')

  try {
    const payload: any = crypto.verifyJWT(bearerToken)
    if (!payload.id) throw new Error()

    const user = await models.User.findByPk(payload.id, {
      include: [{ model: models.Class }],
    })
    if (!user) throw new Error()

    req.user = user
  } catch (err) {
    return res.status(400).json({ error: 'Token not valid' })
  }

  next()
}

export { authRequired }
