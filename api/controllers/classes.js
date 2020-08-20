const router = require('express').Router()
const middleware = require('../../util/middleware')
const models = require('../../models')

router.get('/', middleware.authRequired, async (req, res) => {
  const classes = req.user.Classes.map((c) => ({
    id: c.id,
    name: c.name,
    calendarId: c.calendarId,
    role: c.ClassUser.role,
  }))

  return res.json(classes)
})

router.get('/:classId', middleware.authRequired, async (req, res) => {
  const { classId: ClassId } = req.params

  const currentClass = await models.Class.findByPk(ClassId, {
    include: [{ model: models.Group }, { model: models.User }],
  })

  return res.json({
    id: currentClass.id,
    name: currentClass.name,
    calendarId: currentClass.calendarId,
    groups: currentClass.Groups.map((g) => ({
      id: g.id,
      name: g.name,
      type: g.type,
      sessionId: g.sessionId,
      userId: g.UserId,
      // users: g.users,
    })),
    users: currentClass.Users.map((u) => ({
      id: u.id,
      firstName: u.firstName,
      lastName: u.lastName,
      email: u.email,
      role: u.ClassUser.role,
    })),
  })
})

module.exports = router
