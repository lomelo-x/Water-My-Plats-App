const db = require('../data/db-config')
const encrypt = require('bcryptjs')

function getUsers() {
    return db('users')
}

module.exports = {
    get
}