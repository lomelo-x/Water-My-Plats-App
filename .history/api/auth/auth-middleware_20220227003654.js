const { JWT_SECRET } = require('../../config');
const jwt = require('jsonwebtoken');
const encrypt = require('bcryptjs');

function checkUserInput(req, res, next) {
    if (!req.body.username || !req.body.password) {
        next({
            status: 422,
            message: 'username and password required'
        })
    }
}

module.exports = {

}