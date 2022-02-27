const { getPlantByID } = require('./plants-model')


async function checkIfPlantExists(req, res, next) {
	const plant = await getPlantByID(req.params.id);
	if (!plant.length) {
		return next({
			status: 401,
			message: 'plant does not exist',
		});
	}
	req.plant = plant[0];
	next();
}
module.exports = {
    c
}