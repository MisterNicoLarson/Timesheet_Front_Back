import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import LoginPage from '../views/LoginPage.vue';
import ForgotPassword from '../views/ForgotPassword.vue';



const routes = [
  { path: '/', component: Home },
  { path:'/aboutus',component: AboutUs},
  { path:'/LoginPage',component: LoginPage},
  { path:'/ForgotPassword',component: ForgotPassword}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
