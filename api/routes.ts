import { Router } from 'express'
const router = Router()
import users from './controllers/users'
import classes from './controllers/classes'
import groups from './controllers/groups'
import feedback from './controllers/feedback'

router.use('/users', users)
router.use('/classes', classes)
router.use('/classes/:classId/groups', groups)
router.use('/feedback', feedback)

export default router
