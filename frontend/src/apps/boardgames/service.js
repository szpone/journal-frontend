import Vue from 'vue'
import urls from '@/config/urls'

function getMatches () {
  return Vue.http.get(urls.boardgames.matchesList())
    .then((response) => {
      return response.body
    })
}

function postMatch (form) {
  return Vue.http.post(urls.boardgames.matchesList(), form)
    .then((response) => { return response.body })
}

function getBoardGames () {
  return Vue.http.get(urls.boardgames.boardgamesList())
    .then((response) => {
      return response.body
    })
}

function getUsers () {
  return Vue.http.get(urls.users.users())
    .then((response) => {
      return response.body
    })
}

export default {
  getMatches,
  getBoardGames,
  getUsers,
  postMatch
}
