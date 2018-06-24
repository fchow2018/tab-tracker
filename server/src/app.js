// Declare const variables and require node modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express() // Build express server
app.use(morgan('combined')) // Use log generator Morgan
app.use(bodyParser.json()) // Parse JSON requests
app.use(cors()) // Allow any client to hit the app server

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8081)
