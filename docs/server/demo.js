const lodash = require('lodash')
const faker = require('faker')
const messages = require('./data/messages')
const movies = require('./data/movies.json')
const projects = require('./data/projects')

function data() {
  return {
    messages,
    movies,
    people: lodash.times(100, n => {
      return {
        id: n + 1,
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
      }
    }),
    projects,
  }
}

module.exports = data
