const router = require('express').Router()
const { checkIfUserExists } = require('./users-middleware')
const User = require('./users-model')

router.get('/', (req, res, next) => {
    User.getUsers()
    .then(users => {
        res.json(users)
    })
    .catch(next)
})

router.get('/:id', ch(req, res, next) => {
    User.getUserByID()
    .then(user => {
        res.json(user)
    })
    .catch(next)
})

module.exports = router