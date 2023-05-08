const PlaylistService = require('../services/playlistService')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid') 

const playlistService = new PlaylistService()

class PlaylistController {
  async getAllSongs(req, res) {
    try {
      const songs = await playlistService.getAllSongs()
      res.status(200).json(songs)
    } catch (error) {
      console.error(error)
    }
  }

  async createSongs(req, res) {
    try {
      const filePath = path.join(__dirname, '../playlist.json')
      const jsonData = fs.readFileSync(filePath, 'utf-8')
      const songsData = JSON.parse(jsonData)
      const songs = songsData.map((song) => ({
        id: uuid.v4(),
        performer: song.performer,
        song: song.song,
        genre: song.genre,
        year: song.year
      }))
      if(!songs) throw new Error('songs does not exist')
      await playlistService.createSongs(songs)
      res.status(201).json({ message: 'all songs was created' })
    } catch (error) {
      res.status(400)
      console.error(error)
    }
  }
}

module.exports = PlaylistController