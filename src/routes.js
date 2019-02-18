const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
  // return res.send('Hello GoBarber!')
  return res.render('auth/signup.njk')
})

module.exports = routes
