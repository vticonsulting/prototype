const lodash = require('lodash')
const faker = require('faker')

const projects = lodash.times(100, n => {
  const createdAt = faker.date.past(2)
  const name = faker.name.findName()

  return {
    id: n + 1,
    projectNumber: faker.datatype.uuid(),
    claimNumber: faker.datatype.uuid(),
    name,
    username: faker.internet.userName(name),
    avatar: faker.image.avatar(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(name),
    status: faker.random.arrayElement(['pending', 'complete', 'closed']),
    latitude: faker.address.latitude,
    createdAt,
    serviceTech: faker.random.arrayElement(['pending', 'complete']),
    insuranceCompany: faker.random.arrayElement(['pending', 'complete']),
    insuranceAdjuster: faker.random.arrayElement(['David Edwards', 'complete']),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    postalCode: faker.address.zipCode(),
    serviceArea: faker.random.arrayElement(['DC Metro', 'complete']),
    serviceRegion: faker.random.arrayElement(['Mid-Atlantic', 'complete']),
    regionLead: faker.random.arrayElement(['pending', 'complete']),
    serviceType: faker.random.arrayElement(['pending', 'complete']),
    providerId: faker.datatype.uuid(),
    lastSeen: faker.date.between(createdAt, new Date()),
    requiresHAAG: 0,
  }
})

const data = {
  projects
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
