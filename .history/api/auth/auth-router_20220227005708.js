const router = require('express').Router();
const User = require('../users/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../top-secret');
const {
	checkUsernameFree,
	checkUsernameExists,
	checkUserInput,
} = require('../middleware/restricted');