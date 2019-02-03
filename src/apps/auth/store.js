import { authService } from '@/services'
import router from '@/router'

const state = {
  token: '',
  user: null,
  loading: true,
  error: null,
  authenticated: false,
  checking: false,
}

// getters
const getters = {
  isAuthenticated: (state) => state.authenticated,
  isChecking: (state) => state.checking,
  token: (state) => state.token
};
// actions
const actions = {
  doLogin (
    { commit },
    { username, password, rememberSession }
  ) {
    return authService.login(username, password, rememberSession)
      .then(obj => {
        commit('loggedIn', obj)
      }).then(() => {
        const { nextUrl } = router.history.current.query
        router.push({ path: nextUrl || '/' }
        )
      })
  },
  doLogout ({ commit }) {
    authService.logout();
    commit('loggedOut');
    router.push({
      path: '/login'
    })
  },
  checkSession ({ commit }) {
    if (!this.getters['auth/isChecking']) {
      commit('setChecking', true)
      return authService.checkSession()
        .then(user => {
          commit('loggedIn', user)
          commit('setChecking', false)
        }, () => {
          router.push({
            path: '/login'
          })
        }).catch(() => {
          // Fail silently.
        })
    }
  },

  registerUser ({ commit }, form) {
    return authService.registerUser(form)
      .then(() => {
        router.push({
          path: '/login'
        })
      })
  }
}
// mutations
const mutations = {
  loggedIn (state, obj) {
    state.token = obj.token;
    state.user = obj.user;
    state.loading = false;
    state.error = null;
    state.authenticated = true
  },
  loggedOut (state) {
    state.token = '';
    state.user = null;
    state.loading = false;
    state.error = null;
    state.authenticated = false
  },
  setChecking (state, value) {
    state.checking = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
