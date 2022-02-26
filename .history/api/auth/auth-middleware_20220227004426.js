const { findUsername } = require('../users/users-model');
const { JWT_SECRET } = require('../../config');
const jwt = require('jsonwebtoken');
const encrypt = require('bcryptjs');

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

async function checkUsernameExists(req, res, next) {
	const user = await findUsername(req.body.username);
	if (user) {
		return next({
			status: 422,
			message: 'username already exists',
		});
	}
	next();
}

async function ConfirmUserCreation

module.exports = {
	checkUserInput,
	checkUsernameExists,
};
