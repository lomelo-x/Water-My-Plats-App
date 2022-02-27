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

function checkUserInput(req, res, next) {
	if (!req.body.username || !req.body.password) {
		next({
			status: 422,
			message: 'username and password required',
		});
	} else {
		next();
	}
}

module.exports = {
    checkIfPlantExists,
}