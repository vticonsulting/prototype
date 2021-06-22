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
  getChurches(perPage, page) {
    return apiClient.get('churches?_limit=' + perPage + '&_page=' + page)
  },
  getChurch(id) {
    return apiClient.get('churches/' + id)
  },
  postChurch(church) {
    return apiClient.post('churches', church)
  },
}
