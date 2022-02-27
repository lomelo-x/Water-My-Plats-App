const db = require('../data/db-config');

function getPlants() {
	return db('plants');
}

function getPlantByID(plant_id) {
	return db('plants').where('plant_id', plant_id).first();
}

function getPlantsByUserID(user_id) {
	return db('plants')
		.leftJoin('user_plants', {
			'user_plants.plant_id': 'plants.plant_id',
		})
		.where('user_plants.user_id', user_id);
}

async function createPlant(user) {
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
	getPlantByID,
	findUsername,
	createUser,
	updateUser,
	deleteUser,
};
