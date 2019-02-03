import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../views/utils/MainPage'
import LoginPage from '../views/auth/LoginPage'
import Dashboard from '../views/boardgames/Dashboard'
import AddMatch from '../views/boardgames/AddMatch'
import RegisterPage from "../views/auth/RegisterPage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
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
    },
    {
      path: '/registration',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]
})
