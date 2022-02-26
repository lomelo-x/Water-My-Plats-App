const { JWT_SECRET } = require('../../config');
const jwt = require('jsonwebtoken');
const encrypt = require('bcryptjs');

function checkUserInput(req, res, next) {
    if (!req.body.username || !req.body.password) {
        next({
            status: 422
        })
    }
}

module.exports = {

}