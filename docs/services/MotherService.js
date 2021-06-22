import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'https://api.victortolbert.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getMothers(perPage, page) {
    return apiClient.get('/mothers?_limit=' + perPage + '&_page=' + page)
  },
  getMother(id) {
    return apiClient.get('/mothers/' + id)
  },
  postMother(family) {
    return apiClient.post('/mothers', family)
  },
}
