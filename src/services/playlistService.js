const Playlist = require('../models/playlistModel')
const { Op } = require('sequelize')
const sequelize = require('../db')

class PlaylistService {
  async getAllSongs() {
    const songs = await Playlist.findAll()
    return songs
  }

  async getOneSong(id) {
    const song = await Playlist.findByPk(id)
    return song
  }

  async getFilteredSong(query) {
    const song = await Playlist.findAll({
      where: {
        [Op.or]: [
          {
            performer: { [Op.like]: `%${query}%` }
          },
          {
            song: { [Op.like]: `%${query}%` }
          },
          {
            genre: { [Op.like]: `%${query}%` }
          },
          {
            year: { [Op.like]: `%${query}%` }
          }
        ]
      },
      attributes: {
        include: [
          [sequelize.cast(sequelize.col('year'), 'text'), 'yearText']
        ]
      }
    })
    return song
  }

  async createSongs(items) {
    const songs = await Playlist.bulkCreate(items)
    return songs
  }

  async createOneSong(item) {
    const song = await Playlist.create(item)
    return song
  }
}

module.exports = PlaylistService