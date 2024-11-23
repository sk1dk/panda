import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import SignUpPage from './views/SignUpPage.vue'
import LoginPage from './views/LoginPage.vue'
import DashboardPage from './views/DashboardPage.vue'
import PublicProfilePage from './views/PublicProfilePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/:username',
    name: 'PublicProfile',
    component: PublicProfilePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router