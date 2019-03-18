<template>
  <div>
    <ul v-for="match in matches" v-if="matches" :key="match.id">
      <li>{{ match }}</li>
    </ul>

    <div v-else>
      No matches!
    </div>
    <router-link to="/add-match" tag="button">Add match</router-link>

    <div class="row">
      <div class="col-lg-12">
        <h1>Dashboard</h1>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapState('boardgames', {
      matches: (state) => state.matches
    })
  },
  beforeMount () {
    this.$store.dispatch('boardgames/getMatches')
  }
}
</script>
