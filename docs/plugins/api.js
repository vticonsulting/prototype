export default ({ $axios, store }, inject) => {
  const instance = $axios.create({
    baseURL: 'https://api.victortolbert.com',
    headers: { 'X-Custom-Header': 'CustomHeader1' },
    timeout: 1000,
  })

  const api = {
    get: (resource) => {
      return instance.get(resource)
    },
    index: (resource) => {
      return instance.get(resource)
    },
    find: (resource, id) => {
      return instance.get(`${resource}/${id}`)
    },
    show: (resource, id) => {
      return instance.get(`${resource}/${id}`)
    },
    create: (resource, payload) => {
      return instance.post(resource, payload)
    },
    update: (resource, id, payload) => {
      return instance.put(`${resource}/${id}`, payload)
    },
    destroy: (resource, id) => {
      return instance.delete(`${resource}/${id}`)
    },
  }
  inject('api', api)
}
