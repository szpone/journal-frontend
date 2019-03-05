import store from 'store'

export function setup () {
  return function (request, next) {
    const token = store.getters['auth/token']
    request.headers.set('Authorization', `JWT ${token}`)
    next()
  }
}

export default {
  setup
}
