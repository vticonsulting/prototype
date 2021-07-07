const data = require('../shared/person-data');

module.exports = async function (context, req) {
  try {
    const people = data.getPeople();
    context.res.status(200).json(people);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
