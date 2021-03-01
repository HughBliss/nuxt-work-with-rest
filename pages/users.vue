<template>
  <div class="users-page">
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="remove(user.id)">
          x
        </button>
      </li>
    </ul>
    <form @submit.prevent="handleCreate">
      <label>
        Name
        <input v-model="newUser.name" type="text" name="name">
      </label>
      <label>
        Email
        <input v-model="newUser.email" type="text" name="email">
      </label>
      <button type="submit">
        create
      </button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('users')
export default {
  name: 'Users',
  data () {
    return {
      newUser: {
        name: '',
        email: ''
      }
    }
  },
  computed: {
    ...mapState(['users'])
  },
  async mounted () {
    try {
      await this.fetchUsers()
    } catch (e) {
      alert(e)
    }
  },
  methods: {
    async handleCreate () {
      try {
        await
        this.create(this.newUser)
        this.newUser = {
          name: '',
          email: ''
        }
      } catch (e) {
        alert(e)
      }
    },
    ...mapActions(['fetchUsers', 'create', 'remove'])
  }
}
</script>
