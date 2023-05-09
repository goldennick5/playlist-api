const express = require('express')
const PlaylistController = require('../controllers/playlistController')

const playlistRouter = express.Router()
const playlistController = new PlaylistController()

playlistRouter.get('/getAllSongs', playlistController.getAllSongs)
playlistRouter.get('/getOneSong/:id', playlistController.getOneSong)
playlistRouter.get('/getFilteredSong', playlistController.getFilteredSong)
playlistRouter.post('/createSongs', playlistController.createSongs)
playlistRouter.post('/createOneSong', playlistController.createOneSong)

module.exports = playlistRouter;