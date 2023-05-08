const express = require('express')
const PlaylistController = require('../controllers/playlistController')

const playlistRouter = express.Router()
const playlistController = new PlaylistController()

playlistRouter.get('/getAllSongs', playlistController.getAllSongs)
playlistRouter.post('/createSongs', playlistController.createSongs)

module.exports = playlistRouter;