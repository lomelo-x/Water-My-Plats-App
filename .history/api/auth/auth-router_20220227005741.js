const router = require('express').Router();
const User = require('../users/user-model');
const ecrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');
const {
	checkUsernameFree,
	checkUsernameExists,
	checkUserInput,
} = require('./');