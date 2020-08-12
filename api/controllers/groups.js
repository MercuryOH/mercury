const router = require('express').Router({ mergeParams: true })
const OpenTok = require('opentok')
const joi = require('@hapi/joi')
const models = require('../../models')
const middleware = require('../../util/middleware')

const openTok = new OpenTok(process.env.VV_API_KEY, process.env.VV_API_SECRET)

const createGroupSchema = joi.object({
  name: joi.string().required(),
  type: joi.string().valid('group', 'discussion', 'office').required(),
  creatorId: joi.number().integer().required(),
})

router.post('/', middleware.authRequired, async (req, res) => {
  const { value, error } = createGroupSchema.validate(req.body)
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
        creatorId: value.creatorId,
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

router.get('/', middleware.authRequired, async (req, res) => {
  const { classId: ClassId } = req.params

  const groups = await models.Group.findAll({ where: { ClassId } })

  return res.json(groups)
})

router.get('/:groupId', middleware.authRequired, async (req, res) => {
  const { groupId } = req.params

  const group = await models.Group.findByPk(groupId)

  if (!group) {
    return res.status(404).json({ error: 'Group not found' })
  }

  return res.json(group)
})

router.delete('/:groupId', middleware.authRequired, async (req, res) => {
  const { groupId } = req.params

  await models.Group.destroy({ where: { id: groupId } })

  res.status(204).send()
})

module.exports = router
