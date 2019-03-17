<template>
  <div class="row">
    <div class="col-lg-12">
      <h2>Login</h2>

      <div v-if="errors.length">
        Please correct the following errors:
        <div v-for="error in errors">
          <p>{{ error }}</p>
        </div>
      </div>

      <b-form @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <b-form-group label="Username" label-for="username">
              <b-form-input type="text" id="username" v-model="form.username" required/>
            </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <b-form-group label="Password" label-for="password">
              <b-form-input type="password" id="password" v-model="form.password" required/>
            </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <b-button type="submit" variant="primary">Submit</b-button>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      errors: [],
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
        .then(() => {
          this.$router.push({
            path: '/dashboard'
          })
        })
        .catch(() => this.errors.push('Login or password are incorrect'))
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
