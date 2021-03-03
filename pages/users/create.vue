<template>
  <div class="create-user-page">
    <form @submit.prevent="handleCreate">
      <label>
        Name
        <input v-model="newUser.name" type="text" name="name">
      </label>
      <label>
        Email
        <input v-model="newUser.email" type="text" name="email">
      </label>
      <label>
        Info
        <input v-model="newUser.info" type="text" name="info">
      </label>
      <button type="submit">
        create
      </button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('users')
export default {
  name: 'Create',
  data () {
    return {
      newUser: {
        name: '',
        email: '',
        info: ''
      }
    }
  },
  methods: {
    async handleCreate () {
      try {
        await this.create(this.newUser)
        this.newUser = {
          name: '',
          email: ''
        }
        await this.$router.push('/users')
      } catch (e) {
        alert(e)
      }
    },
    ...mapActions(['fetchUsers', 'create', 'remove'])
  }
}
</script>

<style scoped>

</style>
