const { Sequelize } = require('sequelize')

const db = {
  name: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  hostname: process.env.DB_HOSTNAME,
  dialect: 'postgres'
}

const sequelize = new Sequelize(db.name, db.username, db.password, {
  host: db.hostname,
  dialect: db.dialect
})

module.exports = sequelize