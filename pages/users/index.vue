<template>
  <div class="users-page">
    <nuxt-link to="/users/create">
      create
    </nuxt-link>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="handleRemove(user.id)">
          x
        </button>
        <nuxt-link :to="`/users/${user.id}`">
          info
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('users')
export default {
  name: 'Users',

  async fetch () {
    try {
      await this.fetchUsers()
    } catch (e) {
      throw new Error(e)
    }
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    async handleRemove (id) {
      try {
        await this.remove(id)
      } catch (e) {
        throw new Error(e)
      }
    },
    ...mapActions(['fetchUsers', 'remove'])
  }
}
</script>
