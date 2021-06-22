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
  getRegions(perPage, page) {
    return apiClient.get('/regions')
  },
  getRegion(id) {
    return apiClient.get('/regions/' + id)
  },
  postRegion(region) {
    return apiClient.post('/regions', region)
  },
}
