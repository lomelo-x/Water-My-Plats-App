const router = require('express').Router();
const restricted = require('../restricted/restricted-middleware');
const Plant = require('./plants-model');
const { checkIfPlantExists, CheckPlantInput, checkPlantInput } = require('./plants-middleware');

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

router.post('/' checkPlantInput)

module.exports = router;
