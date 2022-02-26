const router = require('express').Router()

const User = require('./users-model')

router.get('/', (req, res, next) => {
    User.getUsers()
    .then(users => {
        res.Json(users)
    })
    .catch(next)
})

module.exports = router