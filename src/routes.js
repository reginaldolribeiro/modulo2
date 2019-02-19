const express = require('express')

const routes = express.Router()

const UserControoler = require('./app/controllers/UserController')

routes.get('/signup', UserControoler.create)
routes.post('/signup', UserControoler.store)

module.exports = routes
