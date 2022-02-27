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

async function createPlant(plant) {
	const [newPlant] = await db('plants').insert(plant, [
		'plant_id',
		'plant_name',
		'password',
		'phoneNumber',
	]);
	return newUser;
}

async function updatePlant(user, plant_id) {
	const [updatedUser] = await db('plants')
		.where('plant_id', plant_id)
		.update(user, ['plant_id', 'plant_name', 'password', 'phoneNumber']);
	return updatedUser;
}

async function deletePlant(plant_id) {
	const [deletedUser] = await db('plants')
		.where('plant_id', plant_id)
		.delete(['plant_id', 'plant_name', 'password', 'phoneNumber']);
	return deletedUser;
}

module.exports = {
	getPlants,
	getPlantByID,
	getPlantsByUserID,
	createPlant,
	updatePlant,
	deletePlant,
};
