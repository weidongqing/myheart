import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/page/home'
import Login from '@/components/page/login'
import Register from '@/components/page/register'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
  ]
})
router.beforeEach((to,from,next)=>{
    let isLogin = localStorage.getItem('isLogin')
    if (!isLogin) {
        if (to.path !== '/login') {
            if (to.path !== '/register') {
                return next({path: '/login'});
            } else {
                next()
            }
        }else {
            next()
        }
    }else {
        if (to.path === '/login') {
            return next({path: '/'})
        }
        next()
    }
})
export default router