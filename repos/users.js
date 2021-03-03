const URL = '/users'

export const usersRepo = request => ({
  getAll () {
    return request({
      method: 'GET',
      url: URL
    })
  },
  get (id) {
    return request({
      method: 'GET',
      url: `${URL}/${id}`
    })
  },
  create (user) {
    return request({
      method: 'POST',
      url: URL,
      data: user
    })
  },
  delete (id) {
    return request({
      method: 'DELETE',
      url: `${URL}/${id}`
    })
  }
})
