const Playlist = require('../models/playlistModel')

class PlaylistService {
  async getAllSongs() {
    const songs = await Playlist.findAll()
    return songs
  }

  async createSongs(items) {
    const songs = await Playlist.bulkCreate(items)
    return songs
  }
}

module.exports = PlaylistService