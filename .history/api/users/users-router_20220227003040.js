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

router.get('/:id', checkIfUserExists, (req, res, next) => {
        res.json(user)
    })
    .catch(next)
})

module.exports = router