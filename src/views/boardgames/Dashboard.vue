<template>
  <div>
    <ul v-for="match in matches" v-if="matches">
      <li>{{ match }}</li>
    </ul>

    <div v-else>
      No matches!
    </div>

    <router-link to="/add-match" tag="button">Add match</router-link>

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
