const URL = '/users'

export const usersRepo = request => ({
  getAll () {
    return request({
      method: 'GET',
      url: URL
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
