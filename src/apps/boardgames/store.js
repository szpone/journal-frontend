import { boardgamesService } from '@/services'
import router from '@/router'

const state = {
  boardgames: [],
  matches: [],
  users: []
}

// actions
const actions = {
  getMatches (
    { commit }
  ) {
    return boardgamesService.getMatches()
      .then((response) => commit('setMatches', response))
  },

  getBoardGames (
    { commit }
  ) {
    return boardgamesService.getBoardGames()
      .then((response) => commit('setBoardGames', response))
  },

  getUsers (
    { commit }
  ) {
    return boardgamesService.getUsers()
      .then((response) => commit('setUsers', response))
  },

  postMatch ({ commit }, form) {
    return boardgamesService.postMatch(form)
      .then(() => {
        router.push({
          path: '/dashboard'
        })
      })
  }
}
// mutations
const mutations = {
  setMatches (state, obj) {
    state.matches = obj
  },
  setBoardGames (state, obj) {
    state.boardgames = obj
  },
  setUsers (state, obj) {
    state.users = obj
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
