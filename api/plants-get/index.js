const data = require('../shared/plant-data');

module.exports = async function (context, req) {
  try {
    const plants = data.getPlants();
    context.res.status(200).json(plants);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
