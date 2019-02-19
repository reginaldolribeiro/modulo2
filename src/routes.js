const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserControoler = require('./app/controllers/UserController')

routes.get('/signup', UserControoler.create)
routes.post('/signup', upload.single('avatar'), UserControoler.store)

module.exports = routes
