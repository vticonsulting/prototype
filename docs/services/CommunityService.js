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
  getCommunities(perPage, page) {
    return apiClient.get('communities?_limit=' + perPage + '&_page=' + page)
  },
  getCommunity(id) {
    return apiClient.get('communities/' + id)
  },
  postCommunity(community) {
    return apiClient.post('communities', community)
  },
}
