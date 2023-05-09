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
      res.status(400)
      console.error(error)
    }
  }

  async getOneSong(req, res) {
    try {
      const id = req.params.id
      const song = await playlistService.getOneSong(id)
      res.status(200).json(song)
    } catch (error) {
      res.status(400)
      console.error(error)
    }
  }

  async getFilteredSong(req, res) {
    try {
      const { performer, song, genre, year } = req.query;
      const songObj = {
        performer, song, genre, year
      }
      const filteredSong = await playlistService.getFilteredSong(songObj)
      res.status(200).json({filteredSong})
    } catch (error) {
      res.status(400)
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
      if (!songs) throw new Error('songs does not exist')
      await playlistService.createSongs(songs)
      res.status(201).json({ message: 'all songs was created' })
    } catch (error) {
      res.status(400)
      console.error(error)
    }
  }

  async createOneSong(req, res) {
    try {
      const { performer, song, genre, year } = req.body
      const songObj = {
        performer,
        song,
        genre,
        year
      }
      if (!performer || !song || !genre || !year) res.send('song does not exist')
      await playlistService.createOneSong(songObj)
      res.status(201).json({ message: 'song was created' })
    } catch (error) {
      res.status(400)
      console.error(error)
    }
  }
}

module.exports = PlaylistController