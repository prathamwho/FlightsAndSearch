const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body); // Use generic 'create'
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully created an airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create an airport',
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.destroy(req.params.id); // Use generic 'destroy'
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted an airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the airport',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await airportService.get(req.params.id); // Use generic 'get'
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched an airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the airport',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await airportService.update(req.params.id, req.body); // Use generic 'update'
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated an airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the airport',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await airportService.getAll(); // Use generic 'getAll'
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all airports',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the airports',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}