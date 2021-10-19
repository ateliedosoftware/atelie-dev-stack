import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import CadastroUser from '../views/CadastroUser.vue'
//import store from "../store";


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'IFRS - Home'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'IFRS - Login',
            guest: true
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            title: 'IFRS - Dashboard',
            //requiresAuth: true
        }
    },
    {
        path: '/cadastro',
        name: 'cadastroUser',
        component: CadastroUser,
        meta: {
            title: 'IFRS - Cadastro Usuário',
            guest: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


/*verificação de autenticacao
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/dashboard");
      return;
    }
    next();
  } else {
    next();
  }
});*/

export default router