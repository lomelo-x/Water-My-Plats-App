const { getUserByID } = require('./users-model');

async function checkUsernameExists(req, res, next) {
    const user = await getUserByID(req)
}
module.exports = {
    checkUsernameExists
}