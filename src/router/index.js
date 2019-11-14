import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cate from '../views/Cate.vue'
import Cart from '../views/Cart.vue'
import My from '../views/My.vue'
import Tabbar from '../views/Tabbar.vue'
import Details from '../views/Details.vue'
import Payment from '../views/my/Order/payment.vue'
import Deliver from '../views/my/Order/Deliver.vue'
import Receiving from '../views/my/Order/Receiving.vue'
import After from '../views/my/Order/After_sale.vue'
import Coupon from '../views/my/Assets/Coupon.vue'
import Code from '../views/my/Assets/Code.vue'
import Advance from '../views/my/Assets/Advance.vue'
import Gift from '../views/my/Assets/Gift.vue'
import Address from '../views/my/Assets/Address.vue'
import Opinion from '../views/my/Assets/Opinion.vue'
import Shopping from '../views/my/Assets/Shopping.vue'

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
  path: '/Cate/:newId',
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
},
{
  path: '/payment',
  component: Payment
},
{
  path: '/deliver',
  component: Deliver
},
{
  path: '/receiving',
  component: Receiving
},
{
  path: '/after_sale',
  component: After
},
{
  path: '/coupon',
  component: Coupon
},
{
  path: '/code',
  component: Code
},
{
  path: '/advance',
  component: Advance
},
{
  path: '/gift',
  component: Gift
},
{
  path: '/address',
  component: Address
},
{
  path: '/opinion',
  component: Opinion
},
{
  path: '/shopping',
  component: Shopping
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const whiteList = ['/Login', '/Home', '/Details', '/Cate', '/Cart', '/']
// router.beforeEach((to, from, next) => {
//   if (to.path) { // 验证登录信息
//     if (to.path === '/Login') {
//       next({ path: '/' })
//     }
//     next()
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       // next('/Login')
//       alert('Login')
//     }
//   }
// })
export default router
