const router = require('express').Router();
const { checkIfUserExists } = require('./users-middleware');
const User = require('./users-model');
const restricted = require('../restricted/restricted-middleware');
const { hashPassword } = require('../auth/auth-middleware');

router.get('/', (req, res, next) => {
	User.getUsers()
		.then((users) => {
			res.json(users);
		})
		.catch(next);
});

router.get('/:id', checkIfUserExists, (req, res) => {
	res.json(req.user);
});

router.put(
	'/:id',
	checkIfUserExists,
	restricted,
	hashPassword,
	(req, res, next) => {
		User.updateUser(req.body, req.params.id)
			.then((updatedUser) => {
				res.json(updatedUser);
			})
			.catch(next);
	}
);

router.delete('/:id', checkIfUserExists, restricted, (req, res, next) => {
	Users.deleteUser(req.params.id)
		.then((deletedUser) => {
			res.json(deletedUser);
		})
		.catch(next);
});

module.exports = router;
