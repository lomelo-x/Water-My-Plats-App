const router = require('express').Router()

const User = require('./users-model')

router.get('/' (req, res, next) => {
    User.getUsers()
})

module.exports = router