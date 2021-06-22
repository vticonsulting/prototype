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
  getAdvocates(perPage, page) {
    return apiClient.get('advocates?_limit=' + perPage + '&_page=' + page)
  },
  getAdvocate(id) {
    return apiClient.get('advocates/' + id)
  },
  postAdvocate(advocate) {
    return apiClient.post('advocates', advocate)
  },
}
