import Vue from 'vue'
import Vuex from 'vuex'
import { store as auth } from './apps/auth'
import { store as boardgames } from './apps/boardgames'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    boardgames
  }
})
