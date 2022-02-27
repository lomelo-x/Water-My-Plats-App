const db = require('../data/db-config');

function getplants() {
	return db('plants');
}

function getUserByID(user_id) {
	return db('plants').where('user_id', user_id).first();
}

function findUsername(username) {
	return db('plants').where('username', username).first();
}

async function createUser(user) {
	const [newUser] = await db('plants').insert(user, [
		'user_id',
		'username',
		'password',
		'phoneNumber',
	]);
	return newUser;
}

async function updateUser(user, user_id) {
	const [updatedUser] = await db('plants')
		.where('user_id', user_id)
		.update(user, ['user_id', 'username', 'password', 'phoneNumber']);
	return updatedUser;
}

async function deleteUser(user_id) {
	const [deletedUser] = await db('plants')
		.where('user_id', user_id)
		.delete(['user_id', 'username', 'password', 'phoneNumber']);
	return deletedUser;
}

module.exports = {
	getplants,
	getUserByID,
	findUsername,
	createUser,
	updateUser,
	deleteUser,
};
