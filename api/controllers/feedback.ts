import { Router } from 'express'
const router = Router()
import { authRequired } from '../../util/middleware'
import models from '../../models'

router.post('/', authRequired, async (req: any, res: any) => {
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

export default router
