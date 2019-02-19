const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { filename } = req.file

    await User.create({ ...req.body, avatar: filename })

    return res.redirect('/')

    // const { filename: avatar } = req.file

    // await User.create({ ...req.body, avatar })

    // return res.redirect('/')

    // req.body.avatar = 'teste.jpg'
    // await User.create(req.body)
    // return res.redirect('/')
  }
}

module.exports = new UserController()
