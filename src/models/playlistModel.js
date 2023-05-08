const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const uuid = require('uuid') 

const playlist = sequelize.define('playlist', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuid.v4(),
    allowNull: false
  },
  performer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  song: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: true,
  underscored: true,
  tableName: 'playlist'
})

module.exports = playlist