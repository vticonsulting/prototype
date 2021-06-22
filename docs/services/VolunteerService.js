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
  getVolunteers(perPage, page) {
    return apiClient.get('volunteers?_limit=' + perPage + '&_page=' + page)
  },
  getVolunteer(id) {
    return apiClient.get('volunteers/' + id)
  },
  postVolunteer(volunteer) {
    return apiClient.post('volunteers', volunteer)
  },
}
