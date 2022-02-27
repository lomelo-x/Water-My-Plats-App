const router = require('express').Router();
const restricted = require('../restricted/restricted-middleware');
const Plant = require('./plants-model');
const { checkIfPlantExists, CheckPlantInput } = require('./plants-middleware');

router.get('/', (req, res, next) => {
    Plant.get
})

module.exports = router;
