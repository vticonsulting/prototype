export default ($axios) => (resource) => ({
  index() {
    // console.log($axios)
    return $axios.$get(`${resource}?id_affiliate=45`)
  },

  show(id) {
    return $axios.$get(`${resource}/${id}`)
  },

  create(payload) {
    return $axios.$post(`${resource}`, payload)
  },

  update(id, payload) {
    return $axios.$post(`${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.$delete(`${resource}/${id}`)
  },
})
