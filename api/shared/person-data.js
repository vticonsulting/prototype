const lodash = require('lodash')
const faker = require('faker')

const people = lodash.times(100, n => {
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
  people
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};

const addPerson = (person) => {
  person.id = getRandomInt();
  data.people.push(person);
  return person;
};

const updatePerson = (person) => {
  const index = data.people.findIndex((v) => v.id === person.id);
  console.log(person);
  data.people.splice(index, 1, person);
  return person;
};

const deletePerson = (id) => {
  const value = parseInt(id, 10);
  data.people = data.people.filter((v) => v.id !== value);
  return true;
};

const getPeople = () => {
  return data.people;
};

module.exports = { addPerson, updatePerson, deletePerson, getPeople };
