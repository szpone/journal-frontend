import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '../views/auth/LoginPage'
import Dashboard from '../views/boardgames/Dashboard'
import AddMatch from '../views/boardgames/AddMatch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/add-match',
      name: 'AddMatch',
      component: AddMatch
    }
  ]
})
