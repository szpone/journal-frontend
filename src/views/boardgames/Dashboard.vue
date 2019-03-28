<template>
  <div class="row">
      <div class="col-lg-12">
        <h1>Dashboard</h1>
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <h3>Matches</h3>
            <b-table striped :items="matches" :fields="fields" v-if="matches"></b-table>
            <div v-else>No matches! Please add one</div>
            </div>
          </div>
        <router-link to="/add-match" class="btn btn-primary">Add match</router-link>
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <h3>Top 3 Games</h3>
            <b-table striped :items="topThree"></b-table>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  data () {
    return {
      fields: [
        {
          key: 'victory',
          label: 'Victory'
        },
        {
          key: 'points',
          label: 'Points'
        },
        {
          key: 'scenario',
          label: 'Scenario'
        },
        {
          key: 'players_names',
          label: 'Players'
        },
        {
          key: 'board_game_name',
          label: 'Board game'
        },
        {
          key: 'expansion',
          label: 'expansion'
        }
      ]
    }
  },
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
