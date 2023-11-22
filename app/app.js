'use strict'

// start an express server on port 3000
const express = require('express')
const app = express()

// set default values for port and welcome message
let port = process.env.PORT || 4000
let welcomeMessage = process.env.WELCOME_MESSAGE || 'Hallo Welt'

// serve static files from the public directory
app.use(express.static('public'))

// start the server
app.listen(port, () => {
    console.log(welcomeMessage)
})