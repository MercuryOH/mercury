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

const createClassSchema = joi.object({
  name: joi.string().required(),
  calendarId: joi.string().required(),
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

interface RootResponse {
  id: number
  name: string
  calendarId: number
  role: string
}

router.get(
  '/',
  authRequired,
  async (req: EnrichedRequest, res: Response<Array<RootResponse>>) => {
    const classes = req.user.Classes.map((c: Class) => ({
      id: c.id,
      name: c.name,
      calendarId: c.calendarId,
      role: c.ClassUser.role,
    }))

    return res.json(classes)
  }
)

interface ClassClassIDResponse {
  id: number
  name: string
  calendarId: number
  groups: Group
  users: ClassUser
}

interface Group {
  id: number
  name: string
  type: string
  sessionId: string
  userId: number
}

interface ClassUser {
  id: number
  firstName: string
  lastName: string
  email: string
  role: string
}

router.get(
  '/class/:classId',
  authRequired,
  async (req: EnrichedRequest, res: Response<ClassClassIDResponse>) => {
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

interface AllClassesResponse {
  id: number
  name: string
  calendarId: number
}

router.get(
  '/allClasses',
  authRequired,
  async (_req: EnrichedRequest, res: Response<Array<AllClassesResponse>>) => {
    const allClasses = await models.Class.findAll()
    const all = allClasses.map((c: Class) => ({
      id: c.id,
      name: c.name,
      calendarId: c.calendarId,
    }))

    return res.json(all)
  }
)

router.post('/addClass', authRequired, async (req, res) => {
  const { value, error } = enrollSchema.validate(req.body)

  if (error) {
    console.log(res.status(400).json({ error }))
    return res.status(400).json({ error })
  }

  const user = await models.ClassUser.findOne({
    where: { ClassId: value.classId, UserId: value.userId, role: value.role },
  })

  if (!user) {
    //the user hasn't enrolled in the class yet or has a different role
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

router.post('/createClass', async (req, res) => {
  const { value, error } = createClassSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ error })
  }

  try {
    const existingClass = await models.Class.findOne({
      where: { name: value.name },
    })

    if (existingClass) {
      throw new Error('Class with same name already exists')
    }

    const newClass = await models.Class.create(value)

    return res.json({
      id: newClass.id,
      name: newClass.name,
      calendarId: newClass.calendarId,
    })
  } catch (err) {
    return res.status(400).json({ error: err.message || err })
  }
})

export default router
