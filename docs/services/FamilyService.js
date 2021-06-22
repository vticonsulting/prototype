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
  getFamilies(perPage, page) {
    return apiClient.get('/families?_limit=' + perPage + '&_page=' + page)
  },
  getFamily(id) {
    return apiClient.get('/families/' + id)
  },
  postFamily(family) {
    return apiClient.post('/families', family)
  },
}
