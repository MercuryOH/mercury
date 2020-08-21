const router = require('express').Router({ mergeParams: true })
const OpenTok = require('opentok')
const joi = require('@hapi/joi')
const models = require('../../models')
const middleware = require('../../util/middleware')

const openTok = new OpenTok(process.env.VV_API_KEY, process.env.VV_API_SECRET)

const createGroupSchema = joi.object({
  name: joi.string().required(),
  type: joi.string().valid('group', 'discussion', 'office').required(),
  userId: joi.number().required(),
})

const joinSchema = joi.object({
  email: joi.string().email().required(),
})

const leaveSchema = joi.object({
  userId: joi.number().required(),
})

router.post('/', middleware.authRequired, async (req, res) => {
  const { value, error } = createGroupSchema.validate(req.body)
  const { userId: UserId } = req.body
  const { classId: ClassId } = req.params

  if (error) {
    console.log(res.status(400).json({ error }))
    return res.status(400).json({ error })
  }

  try {
    openTok.createSession((err, session) => {
      if (err) throw new Error('Cannot create session')

      models.Group.create({
        name: value.name,
        type: value.type,
        sessionId: session.sessionId,
        ClassId,
        UserId,
      }).then((group) => res.json(group))
    })
  } catch (err) {
    return res.status(400).json({ error: err.message || err })
  }
})

router.post('/:groupId/token', middleware.authRequired, async (req, res) => {
  const { groupId } = req.params

  const group = await models.Group.findByPk(groupId)

  if (!group) {
    return res.status(404).json({ error: 'Group not found' })
  }

  const token = openTok.generateToken(group.sessionId)

  return res.json({ token })
})

router.post('/:groupId/join', middleware.authRequired, async (req, res) => {
  const { value, error } = joinSchema.validate(req.body)
  const { classId, groupId } = req.params

  if (error) {
    console.log(res.status(400).json({ error }))
    return res.status(400).json({ error })
  }

  const group = await models.Group.findByPk(groupId)

  if (!group) {
    return res.status(404).json({ error: 'Group not found' })
  }

  // if (group.UserId !== req.user.id) {
  //   return res
  //     .status(400)
  //     .json({ error: 'You cannot invite people to this group' })
  // }

  // if (value.email.toLowerCase() === req.user.email.toLowerCase()) {
  //   return res.status(400).json({ error: 'Cannot invite yourself to group' })
  // }

  const user = await models.User.findOne({ where: { email: value.email } })
  const classUser = await models.ClassUser.findOne({
    where: { ClassId: classId, UserId: user.id },
  })

  if (!user) {
    return res.status(400).json({ error: 'User not found' })
  }

  const userAlreadyInGroup = await models.GroupUser.findOne({
    where: { GroupId: group.id, UserId: user.id },
  })

  if (userAlreadyInGroup) {
    return res.status(400).json({ error: 'User already in group' })
  }

  await models.GroupUser.create({
    GroupId: group.id,
    UserId: user.id,
    role: classUser.role,
  })

  return res.status(204).send()
})

router.get('/', middleware.authRequired, async (req, res) => {
  const { classId: ClassId } = req.params

  const groups = await models.Group.findAll({ where: { ClassId } })
  const groupDtos = []

  for (group of groups) {
    groupDtos.push({
      id: group.id,
      name: group.name,
      type: group.type,
      sessionId: group.sessionId,
      ClassId: group.ClassId,
      UserId: group.UserId,
      users: (await group.getUsers()).map((u) => ({
        id: u.id,
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.email,
        role: u.GroupUser.role,
      })),
    })
  }

  return res.json(groupDtos)
})

router.get('/:groupId', middleware.authRequired, async (req, res) => {
  const { groupId } = req.params

  let group = await models.Group.findByPk(groupId, {
    include: [models.User],
  })

  if (!group) {
    return res.status(404).json({ error: 'Group not found' })
  }

  const users = (await group.getUsers()).map((u) => ({
    id: u.id,
    firstName: u.firstName,
    lastName: u.lastName,
    email: u.email,
    role: u.GroupUser.role,
  }))

  group.users = users

  return res.json({
    id: group.id,
    name: group.name,
    sessionId: group.sessionId,
    ClassId: group.ClassId,
    UserId: group.UserId,
    users,
  })
})

router.delete('/:groupId', middleware.authRequired, async (req, res) => {
  const { groupId } = req.params

  await models.Group.destroy({ where: { id: groupId } })

  res.status(204).send()
})

router.delete('/:groupId/leave/:userId', middleware.authRequired, async (req, res) => {
  const { groupId, userId } = req.params

  await models.GroupUser.destroy({ where: { GroupId: groupId, UserId: userId } })

  res.status(204).send()
})

module.exports = router
