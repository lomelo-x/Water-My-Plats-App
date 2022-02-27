const router = require('express').Router();
const User = require('../users/user-model');
const ecrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');
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
        const {}
    }
);
