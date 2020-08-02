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

  const ng = await models.Class.findByPk(ClassId, {
    include:[{model: models.Group}]
  })

  return res.json(ng)
})

module.exports = router
