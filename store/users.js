const INIT_USERS = 'INIT_USERS'
const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'

export const state = () => ({
  users: []
})

export const mutations = {
  [INIT_USERS]: (state, users) => {
    state.users = users
  },
  [ADD_USER]: (state, user) => {
    state.users.push(user)
  },
  [DELETE_USER]: (state, id) => {
    state.users = state.users.filter(u => u.id !== id)
  }
}

export const actions = {
  async fetchUsers ({ commit }) {
    try {
      const users = await this.$usersRepo.getAll()
      commit(INIT_USERS, users)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async create ({ commit }, user) {
    try {
      const newUser = await this.$usersRepo.create(user)
      commit(ADD_USER, newUser)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async remove ({ commit }, id) {
    try {
      await this.$usersRepo.delete(id)
      commit(DELETE_USER, id)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
