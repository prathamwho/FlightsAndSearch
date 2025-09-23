const { FlightService } = require('../services/index');
const { SuccessCodes, ClientErrorCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        // Parse the dates to ensure they are proper JS Dates
        const departureTime = new Date(req.body.departureTime);
        const arrivalTime = new Date(req.body.arrivalTime);

        // Arrival must be after departure
        if (arrivalTime <= departureTime) {
            return res.status(ClientErrorCodes.BAD_REQUEST).json({
                data: {},
                success: false,
                message: 'Invalid flight times',
                err: { error: 'Arrival time cannot be less than or equal to departure time' }
            });
        }

        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: departureTime,
            arrivalTime: arrivalTime,
            price: req.body.price
        };

        const flight = await flightService.createFlight(flightRequestData);

        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        });

    } catch (error) {
        console.log('Flight creation error:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        });
    } catch (error) {
        console.log('Get all flights error:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flight'
        });
    } catch (error) {
        console.log('Get flight error:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the flight'
        });
    } catch (error) {
        console.log('Update flight error:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the flight',
            err: error
        });
    }
};

module.exports = {
    create,
    getAll,
    get,
    update
};
