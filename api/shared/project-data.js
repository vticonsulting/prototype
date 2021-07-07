const data = {
  projects: [
    {
      id: 10,
      name: 'Strawberries',
      description: '16oz package of fresh organic strawberries',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
  ],
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};

const addProject = (project) => {
  project.id = getRandomInt();
  data.projects.push(project);
  return project;
};

const updateProject = (project) => {
  const index = data.projects.findIndex((v) => v.id === project.id);
  console.log(project);
  data.projects.splice(index, 1, project);
  return project;
};

const deleteProject = (id) => {
  const value = parseInt(id, 10);
  data.projects = data.projects.filter((v) => v.id !== value);
  return true;
};

const getProjects = () => {
  return data.projects;
};

module.exports = { addProject, updateProject, deleteProject, getProjects };
