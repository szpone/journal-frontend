<template>
  <form @submit.prevent="onSubmit(form)">
    <input type="text" v-model="form.username" name="username"/>
    <input type="password" v-model="form.password" name="password" />
    <input type="submit" name="submit" />
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState('auth', {
      logged: (state) => state.authenticated
    })
  },
  methods: {
    onSubmit (form) {
      this.$store.dispatch('auth/doLogin', form)
        .then(() => console.log('dupa'))
    }
  },
  beforeMount () {
    if (this.logged) {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
