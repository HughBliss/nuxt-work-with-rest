const INIT_USER = 'INIT_USER'

export const state = () => ({
  user: {}
})

export const mutations = {
  [INIT_USER]: (state, user) => {
    state.user = user
  }
}

export const actions = {
  async fetchUser ({ commit }, id) {
    try {
      const user = await this.$usersRepo.get(id)
      commit(INIT_USER, user)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
