export const state = () => ({
  movies: [],
  recipes: [
    {
      title: 'Red White and Blue Rice Krispie Treats',
      author: 'Hank Douglas',
      time: 20,
      difficulty: 'medium',
      servings: 4,
      procedure:
        'My recipe for Red White and Blue Rice Krispie Treats lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image:
        'https://www.iheartnaptime.net/wp-content/uploads/2018/05/red-white-and-blue-rice-krispie-treats.jpg',
      isFeatured: true,
    },
    {
      title: 'Garlic and Herb Sautéed Bell Pepper Strips',
      author: 'Nicholas Denver',
      time: 30,
      difficulty: 'easy',
      servings: 5,
      procedure:
        'Garlic and Herb Sautéed Bell Pepper Strips, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      image:
        'https://www.thespruceeats.com/thmb/eFyjZT5rxTDF3j3GD2undTytLjk=/3000x3000/smart/filters:no_upscale()/garlic-herb-sauteed-bell-pepper-recipe-102112-hero-01-5be21874c9e77c0051eed106.jpg',
      isFeatured: true,
    },
    {
      title: 'Lily’s Healthy Beef Burger',
      author: 'Lily Ford',
      time: 10,
      difficulty: 'easy',
      servings: 4,
      procedure:
        'Lily’s Healthy Beef Burger recipe, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81cMw0qNjTL._SX425_.jpg',
    },
  ],
  theme: 'ema',
  advocate: {
    forms: {
      menu: {
        options: [
          {label: 'Advocate Application'},
          {label: 'ACE Application'},
          {label: 'Action Plan'},
          {label: 'CESD'},
          {label: 'Self Referral'},
          {label: 'Weekly Tasks'},
        ],
      },
    },
  },
  affiliate: {
    id: 1,
    pages: ['resume'],
    name: 'ga-sps',
    subdomain: 'ga-sps',
    theme: {
      nav: {
        class: 'bg-white text-gray-800',
      },
      logo_path: '',
      colors: {
        primary: 'paprika',
        secondary: '',
        tertiary: '',
        danger: '',
        warning: '',
        success: '',
        info: '',
      },
    },
    menuOptions: [
      {label: 'List Affiliates'},
      {label: 'Regions'},
      {label: 'Staff'},
      {label: 'Agencies'},
      {label: 'Churches'},
      {label: 'Reports'},
      {label: 'Import Data'},
    ],
  },
  authUser: {
    id: 1,
    firstName: 'Victor',
    name_first: 'Victor',
    lastName: 'Tolbert',
    name_last: 'Tolbert',
    people_email_primary: 'victor.tolbert@gmail.com',
    avatarPath: 'img/people/victor.jpeg',
    url_avatar: `[BASEURL]/img/people/victor.jpeg`,
    avatarURL: `https://cominex.net/assets/img/people/victor.jpeg`,
    profilePhotoUrl: 'https://cominex.net/assets/img/people/victor.jpeg',
  },
  categories: {},
  event: {
    title: 'Event',
    time: '12:00',
    date: '',
    location: '',
    description: '',
  },
  releases: [],
  people: {
    menuOptions: [
      {label: 'Advocates'},
      {label: 'Volunteers'},
      {label: 'Families'},
      {label: 'Communities'},
      {label: 'Regions'},
      {label: 'People Map'},
    ],
  },
})

export const getters = {
  favoriteMovies: state => {
    return state.movies.filter(movie => movie.isFavorite)
  },
}

export const mutations = {
  SET_MOVIES: (state, movies) =>
    (state.movies = movies.map(movie => {
      return {
        ...movie,
        isFavorite: false,
        isDeleted: false,
      }
    })),

  REMOVE_MOVIE(state, movieId) {
    state.movies = state.movies.filter(movie => movie.id !== movieId)
  },

  addRecipe(state, recipe) {
    state.recipes.push(recipe)
  },
}

export const actions = {
  async nuxtServerInit({commit}, {$axios}) {
    const movies = await $axios.$get(`movies`)
    commit('SET_MOVIES', movies)
  },
}
