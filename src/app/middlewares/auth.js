module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // Objeto que fica disponivel para todas as views do sistemas
    res.locals.user = req.session.user

    return next()
  }

  return res.redirect('/')
}
