// import {mande, defaults} from 'mande'
import axios from 'axios'

// export const jokes = mande('https://official-joke-api.appspot.com')
// jokes.options.a

// @ts-ignore
// delete defaults.headers['Content-Type']

export function fetchUsers() {
  return axios.get('https://api.victortolbert.com/people')
}
