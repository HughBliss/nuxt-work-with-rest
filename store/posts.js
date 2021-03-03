const INIT_POSTS = 'INIT_POSTS'

export const state = () => ({
  posts: []
})

export const mutations = {
  [INIT_POSTS]: (state, posts) => {
    state.posts = posts
  }
}

export const actions = {
  async fetchPosts ({ commit }) {
    const posts = await this.$postsRepo.all()
    commit(INIT_POSTS, posts)
  }
}
