import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cate from '../views/Cate.vue'
import Cart from '../views/Cart.vue'
import My from '../views/My.vue'
import Tabbar from '../views/Tabbar.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/Home'
},
{
  path: '/Home',
  component: Home
},
{
  path: '/Cate',
  component: Cate
},
{
  path: '/Cart',
  component: Cart
},
{
  path: '/My',
  component: My
},
{
  path: '/Tabbar',
  component: Tabbar
},
{
  path: '/Details/:item',
  component: Details
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const whiteList = ['/Login', '/Home', '/Details', '/Cate', '/Cart', '/']
router.beforeEach((to, from, next) => {
  if (to.path) { // 验证登录信息
    if (to.path === '/Login') {
      next({ path: '/' })
    }
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // next('/Login')
      alert('Login')
    }
  }
})
export default router
