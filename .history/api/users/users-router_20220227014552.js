const router = require('express').Router();
const { checkIfUserExists } = require('./users-middleware');
const User = require('./users-model');
const restric

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



module.exports = router;
