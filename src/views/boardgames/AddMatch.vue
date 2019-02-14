<template>
  <div>

    <form @submit.prevent="onSubmit()">
      <label for="victory">Victory</label>
      <input type="checkbox" id="victory" v-model="form.victory" name="victory">
      <input type="text" v-model="form.scenario" name="scenario">
      <input type="number" v-model="form.points" name="points">

      <select v-model="form.players" multiple name="users">
        <option v-for="user in users" v-bind:value="user.id">{{ user.username }}</option>
      </select>


      <select v-model="form.board_game" name="board_game">
        <option v-for="game in boardgames" v-bind:value="game.id">{{ game.name }}</option>
      </select>

      <input type="submit" name="submit" />

    </form>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddMatch',
  data () {
    return {
      form: {
        victory: false,
        players: [],
        board_game: '',
        scenario: '',
        points: 0
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('boardgames/getBoardGames')
    this.$store.dispatch('boardgames/getUsers')
  },
  computed: {
    ...mapState('boardgames', {
      boardgames: (state) => state.boardgames,
      users: (state) => state.users
    })
  },
  methods: {
    onSubmit () {
      const formToSend = {
        players: this.form.players,
        board_game: this.form.board_game,
        victory: this.form.victory,
        scenario: this.form.scenario,
      }
      console.log(formToSend)
      this.$store.dispatch('boardgames/postMatch', formToSend)
    }
  }
}
</script>
