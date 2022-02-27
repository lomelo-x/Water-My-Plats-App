const db = require('../data/db-config');

function getPlants() {
	return db('plants');
}

function getPlantByID(plant_id) {
	return db('plants').where('plant_id', plant_id);
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
		'species',
		'h20Frequency',
		//'uploaded_image',
		//'user_id',
	]);
	return newPlant;
}

async function updatePlant(plant, plant_id) {
	const [updatedPlant] = await db('plants')
		.where('plant_id', plant_id)
		.update(plant, [
			'plant_id',
			'plant_name',
			'species',
			'h20Frequency',
			//'uploaded_image',
			//'user_id',
		]);
	return updatedPlant;
}

async function deletePlant(plant_id) {
	const [deletedPlant] = await db('plants')
		.where('plant_id', plant_id)
		.delete([
			'plant_id',
			'plant_name',
			'species',
			'h20Frequency',
			//'uploaded_image',
			//'user_id',
		]);
	return deletedPlant;
}

module.exports = {
	getPlants,
	getPlantByID,
	getPlantsByUserID,
	createPlant,
	updatePlant,
	deletePlant,
};
