<template>
  <div>
    <div class="row">
      <div class="col-lg-2">
        <h3>Registration</h3>
      </div>
    </div>
    <div class="row">
      <form @submit.prevent="onSubmit">
        <div class="col-lg-3">
          <b-form-group label="Username" label-for="username">
            <b-form-input type="text" id="username" v-model="form.username"/>
          </b-form-group>
        </div>

        <div class="col-lg-3">
          <b-form-group label="Email" label-for="email">
            <b-form-input type="email" id="email" v-model="form.email"/>
          </b-form-group>
        </div>

        <div class="col-lg-3">
          <b-form-group label="Password" label-for="password">
            <input type="password" id="password" v-model="form.password"/>
          </b-form-group>

        </div>
        <div class="col-lg-3">
          <input type="submit" name="submit"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      form: {
        'username': '',
        'email': '',
        'password': ''
      }
    }
  },
  methods: {
    onSubmit () {
      let formToSend = {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password
      }
      this.$store.dispatch('auth/registerUser', formToSend)
    }
  }
}
</script>
