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

module.exports = projects

// "PastDueNotComplete": 1226817,
// "PastDueComplete": 1226757,
// "IsToday": 1226880,
// "IsTomorrow": 1228320,
// "IsRecentClosed": 1226880,
// "IsRecentCreated": 1226880,
// "AssignableId": 0,
// "Assignable": "",
// "CreatedBy": "NHA",
// "ReadBySvt": 35649,
// "IsReinspect": "0",
// "AdjusterProjectNumber": 280,
// "IsEscalation": "1",
// "IsReschedule": null
