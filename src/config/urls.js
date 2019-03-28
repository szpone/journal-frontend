const URL = 'http://localhost:8000/'
const API = 'api/'

export default {
  auth: {
    login: () => `${URL}${API}auth/obtain_token/`,
    verify: () => `${URL}${API}auth/verify_token/`,
    refresh: () => `${URL}${API}/auth/refresh_token/`
  },
  boardgames: {
    boardgamesList: () => `${URL}${API}boardgames/`,
    matchesList: () => `${URL}${API}matches/`,
    topThreeList: () => `${URL}${API}matches/top-three/`
  },
  users: {
    users: () => `${URL}${API}users/`,
    userRegistration: () => `${URL}${API}users/register/`
  }
}
