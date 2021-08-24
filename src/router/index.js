import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/recipePage/id=:id',
    name: 'recipePage',
    component: () => import('../pages/RecipePage.vue')
  },
  {
    path: '/recipetype/id=:id',
    name: 'RecipeType',
    component: () => import('../pages/RecipeType.vue')
  },
  {
    path: '/allrecipes/',
    name: 'AllRecipes',
    component: () => import('../pages/AllRecipes.vue')
  },
  {
    path: '/chefpage/id=:id',
    name: 'ChefPage',
    component: () => import('../pages/ChefPage.vue')
  },
  {
    path: '/dashboard/add',
    name: 'Dashboard',
    component: () => import('../pages/Dashboard.vue'),
    meta:{
      hideNavbar: true,
      hideFooter: true,
    }
  },
  {
    path: '/dashboard/myrecipes',
    name: 'MyRecipes',
    component: () => import('../pages/MyRecipes.vue'),
    meta:{
      hideNavbar: true,
      hideFooter: true,
    }
  },
  {
    path: '/dashboard/aboutus',
    name: 'AboutUs',
    component: () => import('../pages/AboutUs.vue'),
    meta:{
      hideNavbar: true,
      hideFooter: true,
    }
  },
  {
    path: '/dashboard/settings',
    name: 'Settings',
    component: () => import('../pages/Settings.vue'),
    meta:{
      hideNavbar: true,
      hideFooter: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
