<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <h2>Dashboard</h2>
        <b-table :items="matches" v-if="matches"></b-table>
        <div v-else>No matches! Please add one</div>
        <router-link class="btn btn-primary">Add match</router-link>
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
      matches: (state) => state.matches,
      topThree: (state) => state.topThree
    })
  },
  beforeMount () {
    this.$store.dispatch('boardgames/getMatches')
    this.$store.dispatch('boardgames/getTopThree')
  }
}
</script>
