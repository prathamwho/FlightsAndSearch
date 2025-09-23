const express = require('express');

const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');
const FlightMiddlewares = require('../../middlewares/flight-middlewares');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);
router.post('/cities', CityController.createMany);

router.get('/city/:id/airports', CityController.getAirports);

router.post('/airports', AirportController.create);
router.delete('/airports/:id', AirportController.destroy);
router.get('/airports/:id', AirportController.get);
router.get('/airports', AirportController.getAll);
router.patch('/airports/:id', AirportController.update);

router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);


module.exports = router;