const express = require('express');

const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);
router.post('/cities', CityController.createMany);

router.post('/airports', AirportController.create);
router.delete('/airports/:id', AirportController.destroy);
router.get('/airports/:id', AirportController.get);
router.get('/airports', AirportController.getAll);
router.patch('/airports/:id', AirportController.update);


module.exports = router;