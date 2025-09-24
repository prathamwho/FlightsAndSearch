// const { Airport } = require('../models/index');

// class AirportRepository {

//     async createAirport(data) {
//         try {
//             const airport = await Airport.create(data);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the repository layer");
//             throw {error};
//         }
//     }

//     async deleteAirport(airportId) {
//         try {
//             await Airport.destroy({
//                 where: {
//                     id: airportId
//                 }
//             });
//             return true;
//         } catch (error) {
//             console.log("Something went wrong in the repository layer");
//             throw {error};
//         }
//     }

//     async updateAirport(airportId, data) {
//     try {
//         const airport = await Airport.findByPk(airportId);
//         if (!airport) {
//             throw new Error('Airport not found');
//         }
//         if (data.name) {
//             airport.name = data.name;
//         }
//         if (data.address) {
//             airport.address = data.address;
//         }
//         await airport.save(); // Save the changes to the database
//         return airport;
//     } catch (error) {
//         console.log("Something went wrong in the repository layer");
//         throw {error};
//     }
// }

//     async getAirport(airportId) {
//         try {
//             const airport = await Airport.findByPk(airportId);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the repository layer");
//             throw {error};
//         }
//     }

//     async getAllAirports() { 
//         try {
//             const airports = await Airport.findAll();
//             return airports;
//         } catch (error) {
//             console.log("Something went wrong in the repository layer");
//             throw {error};
//         }
//     }
// }

// module.exports = AirportRepository;

const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport); 
    }
}

module.exports = AirportRepository;