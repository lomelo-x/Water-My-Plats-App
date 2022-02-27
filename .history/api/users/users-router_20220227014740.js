const router = require('express').Router();
const { checkIfUserExists } = require('./users-middleware');
const User = require('./users-model');
const restricted = require('../restricted/restricted-middleware')
const { hashPassword } = require('../auth/auth-middleware')

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

router.put('/:id', c )


module.exports = router;
