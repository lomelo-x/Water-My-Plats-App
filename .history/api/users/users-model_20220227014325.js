const db = require('../data/db-config');

function getUsers() {
	return db('users');
}

function getUserByID(user_id) {
	return db('users').where('user_id', user_id).first();
}

function findUsername(username) {
	return db('users').where('username', username).first();
}

async function createUser(user) {
	const [newUser] = await db('users').insert(user, [
		'user_id',
		'username',
		'password',
		'phoneNumber',
	]);
	return newUser;
}

async function updateUser(user, user_id) {
	const [updatedUser] = await db('users')
		.where('user_id', user_id)
		.update(user, ['user_id', 'username', 'password', 'phoneNumber']);
	return updatedUser;
}

async function deleteUser(user_id) {
	const [deletedUser] = await db('users')
		.where('user_id', user_id)
		.delete(['user_id', 'username', 'password', 'phoneNumber']);
	return deletedUser;
}

module.exports = {
	getUsers,
	getUserByID,
	findUsername,
	createUser,
	updateUser,
	deleteUser,
};
