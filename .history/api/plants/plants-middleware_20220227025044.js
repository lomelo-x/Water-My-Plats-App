const { getPlantByID } = require('./plants-model')


async function checkIfPlantExists(req, res, next) {
	const user = await getPlantByID(req.params.id);
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