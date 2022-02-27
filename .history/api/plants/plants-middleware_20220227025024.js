const { getPlantByID } = require('./plants-model')


async function checkIfUserExists(req, res, next) {
	const user = await getUserByID(req.params.id);
	if (!user) {
		return next({
			status: 401,
			message: 'user does not exist',
		});
	}
	req.user = user;
	next();
}
module.exports = {

}