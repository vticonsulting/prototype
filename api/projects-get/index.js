const data = require('../shared/project-data');

module.exports = async function (context, req) {
  try {
    const projects = data.getProjects();
    context.res.status(200).json(projects);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
