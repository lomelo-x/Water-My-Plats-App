const { getUserByID } = require('./users-model');

async function checkUsernameExists(req, res, next) {
    const user = await
}
module.exports = {
    checkUsernameExists
}