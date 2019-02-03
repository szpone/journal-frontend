<template>
  <div>
    <h3>Registration</h3>
    <form @submit.prevent="onSubmit()">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="form.username"/>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="form.email"/>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="form.password"/>

      <input type="submit" name="submit" />


    </form>
  </div>
</template>

<script>
  export default {
    name: 'RegisterPage',
    data() {
      return {
        form: {
          'username': '',
          'email': '',
          'password': ''
        }
      }
    },
    methods: {
      onSubmit() {
        let formToSend = {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password
        }
        this.$store.dispatch('auth/registerUser', formToSend).then(() => console.log('dupa'))

      }
    }
  }
</script>
