const { getUserByID } = require('./users-model');

async function checkUsernameExists(req, res, next) {
    const user = await getUserByID(req.params.id)
    if (!user) {
        return next({
            status: 401,
            message: 'user does not exist'
        })
    }
}
module.exports = {
    checkUsernameExists
}