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

function checkPlantInput(req, res, next) {
	if (!req.body.plant_name || !req.body.user_id) {
		next({
			status: 422,
			message: 'plant_name and user_id required',
		});
	} else {
		next();
	}
}

module.exports = {
    checkIfPlantExists,
}