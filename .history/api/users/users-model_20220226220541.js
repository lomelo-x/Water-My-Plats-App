const db = require('../data/db-config');
const encrypt = require('bcryptjs');

function getUsers() {
	return db('users');
}

function getUsersByID(user_id) {
	return db('users').where('user_id', user_id).first();
}

function findUseByUsername(username) {
	return db('users').where('username', username).first();
}

module.exports = {
	getUsers,
	getUsersByID,
	findUsersByUsername,
};
