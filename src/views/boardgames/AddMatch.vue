<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-lg-2">
          <b-form-group label="Victory" label-for="victory">
            <b-form-input type="checkbox" id="victory" v-model="form.victory" name="victory"/>
          </b-form-group>
        </div>

        <div class="col-lg-2">
          <b-form-group label="Scenario" label-for="scenario">
            <b-form-input type="text" id="scenario" v-model="form.scenario" name="scenario"/>
          </b-form-group>
        </div>

        <div class="col-lg-2">
          <b-form-group label="Points" label-for="points">
            <b-form-input type="number" id="points" v-model="form.points" name="points"/>
          </b-form-group>
        </div>

        <div class="col-lg-2">
          <b-form-group label="Players" label-for="players">
            <b-form-select v-model="form.players" multiple name="users">
              <option v-for="user in users" v-bind:value="user.id" :key="user.id">{{ user.username }}</option>
            </b-form-select>
          </b-form-group>
        </div>

        <div class="col-lg-2">
          <b-form-group label="Board games" label-for="board_game">
            <b-form-select v-model="form.players" multiple name="board_game">
              <option v-for="game in boardgames" v-bind:value="game.id" :key="game.id">{{ game.name }}</option>
            </b-form-select>
          </b-form-group>
        </div>

        <div class="col-lg-2">
          <input type="submit" name="submit"/>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import {mapState} from 'vuex'

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
        scenario: this.form.scenario
      }
      this.$store.dispatch('boardgames/postMatch', formToSend)
    }
  }
}
</script>
