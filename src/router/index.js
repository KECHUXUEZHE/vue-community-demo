import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Managerlogin from '../views/managerlogin.vue'
import Personlogin from '../views/personlogin.vue'
import Register from '../views/register.vue'
import Center from '../views/center.vue'
import Manager from '../views/manager.vue'
import Person from '../views/person.vue'
import Owner from '../views/owner.vue'
import Managerupdate from '../views/managerupdate.vue'
import Personcheck from '../views/personcheck.vue'
import Managercheck from '../views/managercheck.vue'
import Managercheckupdate from '../views/managercheckupdate.vue'
import Managercheckadd from '../views/managercheckadd.vue'
import Managerboard from '../views/managerboard.vue'
import Personboard from '../views/personboard.vue'

const routes = [
  {
      path:'/',
      redirect:'/home'
  },
  {
      path:'/home',
      component: Home
  },
  {
      path:'/managerlogin',
      component: Managerlogin
  },
  {
      path:'/personlogin',
      component:Personlogin
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/center',
    component:Center
  },
  {
    path:'/manager',
    component: Manager
  },
  {
    path:'/person',
    component: Person
  },
  {
    path:'/owner',
    component: Owner
  },
  {
    path:'/managerupdate',
    component: Managerupdate
  },
  {
    path:'/personcheck',
    component: Personcheck
  },
  {
    path:'/managercheck',
    component: Managercheck
  },
  {
    path:'/managercheckupdate',
    component: Managercheckupdate
  },
  {
    path:'/managercheckadd',
    component: Managercheckadd
  },
  {
    path: '/managerboard',
    component: Managerboard
  },
  {
    path: '/personboard',
    component: Personboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

