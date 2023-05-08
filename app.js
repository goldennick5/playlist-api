require('dotenv').config()
const cors = require('cors')
const express = require('express')
const sequelize = require('./src/db')
const routes = require('./src/routes/routes')

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
    app.listen(port, () => {
      console.log(`server started on port http:localhost:${port}`)
    })
  } catch (error) {
    throw new Error('The connection is lost.')
  }
}

start()