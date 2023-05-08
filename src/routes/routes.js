const express = require('express')
const playlistRouter = require('./playlistRoutes')

const router = express.Router()

router.use('/api', playlistRouter)

module.exports = router