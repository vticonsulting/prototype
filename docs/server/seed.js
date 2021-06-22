// Run this to generate data.json
const fs = require('fs')
const path = require('path')
const data = require('./demo')
// var db = {}

// Credit http://www.paulirish.com/2009/random-hex-color-code-snippets/
function hex() {
  return Math.floor(Math.random() * 16777215).toString(16)
}

// Tables
// db.accounts = require('./data/accounts')
// db.people = data().people

fs.writeFileSync(
  path.join(__dirname, '..', 'server', 'data.json'),
  JSON.stringify(data(), null, 2),
)
