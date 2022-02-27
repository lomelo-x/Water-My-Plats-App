const router = require('express').Router();
const User = require('../users/user-model');
const encrypt = require('bcryptjs');
const {
	checkUserInput,
	checkUsernameTaken,
	checkUsernameExists,
	hashPassword,
	userToken,
} = require('./auth-middleware');

router.post(
	'/register',
	checkUserInput,
	checkUsernameTaken,
	hashPassword,
	(req, res, next) => {
		const { username, password, phoneNumber } = req.body;
		User.createUser({
			username,
			password,
			phoneNumber,
		})
			.then((newUser) => {
				res.json(newUser);
			})
			.catch(next);
	}
);

router.post(
    '/login', 
checkUserInput, checkUsernameExists, (req, res, next) => {
	const token = userToken(req.user);
	const passwordValid = encrypt.compareSync(
		req.body.password,
		req.user.password
	);
	if (passwordValid) {
		return next({
			status: 201,
			user_id: req.user.user_id,
			message: `welcome, ${req.user.username}`,
			token,
		});
	} else {
		next({
			status: 401,
			message: 'invalid credentials',
		});
	}
});

module.exports = router;
