<template>
  <div class="users-page">
    <h1>{{ user.name }}</h1>
    <h4>{{ user.email }}</h4>
    <p>{{ user.info }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('user')
export default {
  name: 'User',
  data () {
    return {
      id: undefined
    }
  },
  async fetch () {
    const id = this.$route.params.id
    await this.fetchUser(id)
    this.id = id
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  methods: {
    ...mapActions({
      fetchUser: 'fetchUser'
    })
  }
}
</script>

<style scoped>

</style>
