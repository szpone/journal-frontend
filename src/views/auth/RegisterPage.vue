<template>
  <div class="row">
    <div class="col-lg-12">
      <h2>Registration</h2>
      <b-form @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <b-form-group label="Username" label-for="username">
              <b-form-input type="text" id="username" v-model="form.username"/>
            </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <b-form-group label="Email" label-for="email">
              <b-form-input type="email" id="email" v-model="form.email"/>
            </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <b-form-group label="Password" label-for="password">
              <b-form-input type="password" id="password" v-model="form.password"/>
            </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <b-form-group label="Confirm password" label-for="confirm-password">
              <b-form-input type="password" id="confirm-password" v-model="form.confirmPassword"/>
            </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <input type="submit" name="submit"/>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      errors: [],
      form: {
        'username': '',
        'email': '',
        'password': '',
        'confirmPassword': ''
      }
    }
  },
  methods: {
    onSubmit () {
      let formToSend = {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password,
        confirm_password: this.form.confirmPassword
      }
      this.$store.dispatch('auth/registerUser', formToSend)
        .then(() => console.log('dupa'))
        .catch((e) => console.log(e))
    }
  }
}
</script>
