import store from 'store'


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

export function setup () {
  return function (request, next) {
    const token2 = getCookie('token')
    const token = store.getters['auth/token']
    request.headers.set('Authorization', `JWT ${token2}`)
    next()
  }
}

export default {
  setup
}
