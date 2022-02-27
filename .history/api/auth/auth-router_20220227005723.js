const router = require('express').Router();
const User = require('../users/user-model');
const ecrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../');
const {
	checkUsernameFree,
	checkUsernameExists,
	checkUserInput,
} = require('../middleware/restricted');