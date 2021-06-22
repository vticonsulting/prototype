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
  getAgencies(perPage, page) {
    return apiClient.get('agencies?_limit=' + perPage + '&_page=' + page)
  },
  getAgency(id) {
    return apiClient.get('agencies/' + id)
  },
  postAgency(agency) {
    return apiClient.post('agencies', agency)
  },
}
