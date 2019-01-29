const URL = 'http://localhost:8000/'
const API = 'api/'

export default {
  auth: {
    login: () => `${URL}auth/obtain_token/`,
    verify: () => `${URL}auth/verify_token`,
    refresh: () => `${URL}/auth/refresh_token`
  },
  boardgames: {
    boardgamesList: () => `${URL}${API}boardgames/`,
    matchesList: () => `${URL}${API}matches/`
  },
  users: {
    users: () => `${URL}${API}users/`
  }
}
