import Vue from 'vue'
import urls from '@/config/urls'

function login (username, password, rememberSession) {
  return Vue.http.post(urls.auth.login(), { username, password })
    .then((response) => response.body)
    .then((responseBody) => {
      const token = responseBody.token
      const user = _parseToken(token)
      const days = rememberSession ? 365 : 1
      setCookie('token', token, days)
      return { token: token, user }
    })
}

function logout () {
  deleteToken()
}

function checkSession () {
  const { token, days } = getToken()
  return Vue.http.post(urls.auth.refreshToken(), { token })
    .then((response) => response.body)
    .then((responseBody) => {
      const token = responseBody.token
      const user = _parseToken(token)
      setToken(token, days)
      return { token: token, user }
    })
    .catch(() => {
      setToken('', 0)
    })
}

function _parseToken (jwtToken) {
  const user = atob(jwtToken.split('.')[1])
  return JSON.parse(user)
}

function deleteToken () {
  setCookie('token', '', 0)
}

function setToken (token, days_) {
  const days = parseInt(days_, 10)
  const iDays = isNaN(days) ? 1 : days
  setCookie('token', token, iDays)
  setCookie('days', iDays.toString(), iDays)
}

function getToken () {
  const token = getCookie('token') || ''
  const days = getCookie('days') || '1'
  return {
    token, days
  }
}

function setCookie (cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

function getCookie (cname) {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function registerUser (form) {
  return Vue.http.post(urls.users.users(), form)
    .then((response) => { return response.body })
}

export default {
  login,
  logout,
  checkSession,
  registerUser
}
