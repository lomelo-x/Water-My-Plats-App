const router = require('express').Router();
const restricted = require('../restricted/restricted-middleware');
const Plant = require('./plants-model');
const { checkIfPlantExists, checkPlantInput } = require('./plants-middleware');

router.get('/', (req, res, next) => {
	Plant.getPlants()
		.then((plants) => {
			res.json(plants);
		})
		.catch(next);
});

router.get('/:id', checkIfPlantExists, (req, res) => {
	res.json(req.plant);
});

router.post('/', checkPlantInput, restricted, (req, res, next) => {
	Plant.createPlant(req.body)
		.then((newPlant) => {
			res.json(newPlant);
		})
		.catch(next);
});

router.put('/:id', restricted, (req, res, next) => {
	Plant.updatePlant(req.body, req.params.id)
		.then((updatedPlant) => {
			res.json(updatedPlant);
		})
		.catch(next);
});

router.delete('/:id', restricted, (req, res, next) => {
	Plants.deletePlant(req.params.id)
		.then((deletedPlant) => {
			res.json(deletedPlant);
		})
		.catch(next);
});

module.exports = router;
