const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserControler = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', UserControler.create)
routes.post('/signup', upload.single('avatar'), UserControler.store)

routes.get('/app/dashboard', (req, res) => res.render('dashboard'))

module.exports = routes
