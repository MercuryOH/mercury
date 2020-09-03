import { Router, Request, Response } from 'express'
const router = Router()
import { authRequired } from '../../util/middleware'
import models from '../../models/index'
import joi from 'joi'

const enrollSchema = joi.object({
  role: joi.string().valid('Student', 'Professor', 'TA').required(),
  userId: joi.number().required(),
  classId: joi.number().required(),
})

interface EnrichedRequest extends Request {
  user: User
}

interface User {
  Classes: Array<Class>
}

interface Class {
  id: number
  name: string
  calendarId: number
  ClassUser: ClassUser
}

interface ClassUser {
  role: string
}

router.get('/', authRequired, async (req: EnrichedRequest, res: Response) => {
  const classes = req.user.Classes.map((c: Class) => ({
    id: c.id,
    name: c.name,
    calendarId: c.calendarId,
    role: c.ClassUser.role,
  }))

  return res.json(classes)
})

router.get(
  '/class/:classId',
  authRequired,
  async (req: EnrichedRequest, res) => {
    const { classId: ClassId } = req.params

    const currentClass = await models.Class.findByPk(ClassId, {
      include: [{ model: models.Group }, { model: models.User }],
    })

    return res.json({
      id: currentClass.id,
      name: currentClass.name,
      calendarId: currentClass.calendarId,
      groups: currentClass.Groups.map((g: any) => ({
        id: g.id,
        name: g.name,
        type: g.type,
        sessionId: g.sessionId,
        userId: g.UserId,
        // users: g.users,
      })),
      users: currentClass.Users.map((u: any) => ({
        id: u.id,
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.email,
        role: u.ClassUser.role,
      })),
    })
  }
)

router.get('/allClasses', authRequired, async (req, res) => {
  const allClasses = await models.Class.findAll()
  const all = allClasses.map((c: any) => ({
    id: c.id,
    name: c.name,
    calendarId: c.calendarId,
  }))

  return res.json(all)
})

router.post('/addClass', authRequired, async (req, res) => {
  const { value, error } = enrollSchema.validate(req.body)

  if (error) {
    console.log(res.status(400).json({ error }))
    return res.status(400).json({ error })
  }

  const user = await models.ClassUser.findOne({
    where: { ClassId: value.classId, UserId: value.userId },
  })

  if (!user) {
    //the user hasn't enrolled in the class yet
    await models.ClassUser.create({
      ClassId: value.classId,
      UserId: value.userId,
      role: value.role,
    })
  }

  //if the user has already enrolled in the class, nothing's changed

  return res.status(204).send()
})

router.delete(
  '/deleteClass/:classId/:userId',
  authRequired,
  async (req, res) => {
    const { classId, userId } = req.params
    const user = await models.ClassUser.findOne({
      where: { ClassId: classId, UserId: userId },
    })

    if (user) {
      // the user is enrolled in the class
      await models.ClassUser.destroy({
        where: { ClassId: classId, UserId: userId },
      })
    }

    res.status(204).send()
  }
)

export default router
