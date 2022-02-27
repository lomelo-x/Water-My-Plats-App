const db = require('../data/db-config');

function getPlants() {
	return db('plants');
}

function getPlantyID(plant_id) {
	return db('plants').where('plant_id', plant_id).first();
}

function findUsername(username) {
	return db('plants').where('username', username).first();
}

async function createUser(user) {
	const [newUser] = await db('plants').insert(user, [
		'plant_id',
		'username',
		'password',
		'phoneNumber',
	]);
	return newUser;
}

async function updateUser(user, plant_id) {
	const [updatedUser] = await db('plants')
		.where('plant_id', plant_id)
		.update(user, ['plant_id', 'username', 'password', 'phoneNumber']);
	return updatedUser;
}

async function deleteUser(plant_id) {
	const [deletedUser] = await db('plants')
		.where('plant_id', plant_id)
		.delete(['plant_id', 'username', 'password', 'phoneNumber']);
	return deletedUser;
}

module.exports = {
	getPlants,
	getPlantyID,
	findUsername,
	createUser,
	updateUser,
	deleteUser,
};
