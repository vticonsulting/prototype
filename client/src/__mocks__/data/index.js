import faker from 'faker'

const seedUsers = function (quantity, data) {
  for (let i = 1; i <= quantity; i++) {
    const gender = faker.random.number({min: 1, max: 2})
    const firstName = faker.name.firstName(gender)
    const lastName = faker.name.lastName(gender)

    data.users.push({
      id: i,
      name: faker.name.findName(firstName, lastName, gender),
      username: faker.internet.userName(firstName, lastName),
      email: faker.internet.email(firstName, lastName).toLowerCase(),
      gender,
      dateOfBirth: faker.date.past(55, new Date()),
      ocuppation: faker.name.jobTitle(),
      avatar: faker.internet.avatar(),
    })
  }
}

export const courseParticipants = [
  {
    id: 1,
    name: 'Victor Tolbert',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'A Better Way to Learn',
    lastActivity: '2021-01-29 00:00:00',
    progress: 50,
  },
  {
    id: 2,
    name: 'Andy Cook',
    imageUrl: '/assets/img/avatars/2.png',
    course: 'Advocate Clinic Homework',
    lastActivity: '2021-01-28T13:30:00',
    progress: 50,
  },
  {
    id: 3,
    name: 'Patti Lytle',
    imageUrl: '/assets/img/avatars/3.png',
    course: 'Motivating and persuading',
    lastActivity: '2021-01-27T13:00:00',
    progress: 50,
  },
  {
    id: 4,
    name: 'Jeff Johnson',
    imageUrl: '/assets/img/avatars/4.png',
    course: 'Learning as you go',
    lastActivity: '2021-01-26T13:00:00',
    progress: 50,
  },
  {
    id: 5,
    name: 'Paul King',
    imageUrl: '/assets/img/avatars/5.png',
    course: 'The potential risks of advocacy',
    lastActivity: '2021-01-25T13:00:00',
    progress: 50,
  },
  {
    id: 6,
    name: 'Sammy Davis',
    imageUrl: '/assets/img/avatars/6.png',
    course: 'Good strategy requires great tactics',
    lastActivity: '2021-01-24T13:00:00',
    progress: 50,
  },
  {
    id: 7,
    name: 'Stepanie Fleet',
    imageUrl: '/assets/img/avatars/7.png',
    course: 'Motivating and persuading',
    lastActivity: '2021-01-23T13:00:00',
    progress: 50,
  },
  {
    id: 8,
    name: 'Eric Reese',

    imageUrl: '/assets/img/avatars/8.png',
    course: 'A Better Way to Learn',
    lastActivity: '2021-01-22T13:00:04',
    progress: 50,
  },
  {
    id: 9,
    name: 'Pam Oliver',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'The potential risks of advocacy',
    lastActivity: '2021-01-21T13:00:00',
    progress: 50,
  },
  {
    id: 10,
    name: 'Jing Chen',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'Good strategy requires great tactics',
    lastActivity: '2021-01-20T13:00:00',
    progress: 50,
  },
  {
    id: 11,
    name: 'Pamela James',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'Learning as you go',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 12,
    name: 'Jerome Tippins',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'Motivating and persuading',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 13,
    name: 'Craig Paulson',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'Good strategy requires great tactics',
    lastActivity: '2021-01-04',
    progress: 50,
  },
  {
    id: 14,
    name: 'Seymore Butts',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'All about Developmental Disablities',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 15,
    name: 'Zeb Boston',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'A Better Way to Learn',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 16,
    name: 'Rebecca Gonzales',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'Motivating and persuading',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 17,
    name: 'Mike Jones',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'All about Developmental Disablities',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 18,
    name: 'Jeremy Doublestein',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'All about Developmental Disablities',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 19,
    name: 'Brent Stephens',
    imageUrl: '/assets/img/avatars/1.png',
    course: 'All about Developmental Disablities',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 20,
    imageUrl: '/assets/img/avatars/1.png',
    name: 'Walter White',
    course: 'All about Developmental Disablities',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 20,
    imageUrl: '/assets/img/avatars/1.png',
    name: 'Walter White',
    course: 'All about Developmental Disablities',
    lastActivity: '2021-01-14',
    progress: 50,
  },
  {
    id: 21,
    imageUrl: '/assets/img/avatars/1.png',
    name: 'Walter White',
    course: 'All about Developmental Disablities',
    lastActivity: '2021-01-14',
    progress: 50,
  },
]

export const statusTypes = [
  {name: 'Pending'},
  {name: 'Closed'},
  {name: 'Call Queue'},
  {name: 'Birthdays'},
  {name: 'FAM Events'},
  {name: 'Affiliate Events'},
  {name: 'Promise Network Events'},
]

export const userTypes = [
  {name: 'Administrator'},
  {name: 'Insurance Adjuster'},
  {name: 'Customer Service Representative'},
  {name: 'Claims Representative'},
  {name: 'Field Technician'},
  {name: 'Carrier Staff'},
  {name: 'Super User'},
]

export const carriers = [
  {
    id: 1,
    name: 'Allstate',
    settings: {
      meta_title: 'Allstate Insurance Company',
      meta_desc: 'Volunteer Coordination System for Promise 686',
      color_primary: '#ABAC22',
      color_secondary: '#1F1D18',
      color_set_navbar: 'white-black',
      color_primary_text: '#fff',
      color_primary_contrast: 'offset',
      color_primary_offset: '#797a00',
      color_secondary_text: '#000',
      color_secondary_contrast: '',
      color_secondary_offset: '#514f4a',
    },
    status: 40,
    subdomain: null,
  },
]

const db = function () {
  const data = {
    users: [],
  }

  seedUsers(100, data)

  return data
}

export default db
