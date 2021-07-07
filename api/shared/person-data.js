const data = {
  people: [
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
