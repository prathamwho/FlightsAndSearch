const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }

  // Overriding the generic create method to prevent duplicates
  async create(data) {
    try {
        const [airplane, created] = await this.model.findOrCreate({
            where: { modelNumber: data.modelNumber },
            defaults: data
        });
        return airplane;
    } catch (error) {
        console.log("Something went wrong in the Airplane repository");
        throw error;
    }
  }
}

module.exports = AirplaneRepository;