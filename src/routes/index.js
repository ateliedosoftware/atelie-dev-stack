const express = require('express')
const router = express.Router()

const authenticateRoutes = require('./authenticate.routes')
const usersRoutes = require('./users.routes')
const groupsRoutes = require('./groups.routes')
const ousRoutes = require('./ous.routes')

const { ensureAuthenticate } = require('../app/middlewares/ensureAuthenticate')

router.use('/auth', authenticateRoutes)
router.use('/users', ensureAuthenticate, usersRoutes)
router.use('/groups', ensureAuthenticate, groupsRoutes)
router.use('/ous', ensureAuthenticate, ousRoutes)


module.exports = router