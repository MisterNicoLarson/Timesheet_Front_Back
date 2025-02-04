import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoginPage from '../views/LoginPage.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import NewEmployee from '../views/NewEmployee.vue';
import NewCustomer from '../views/NewCustomer.vue';
import RoleCreation from '../views/RoleCreation.vue';
import Timesheet from '../views/Timesheet.vue'; 


const routes = [
  { path: '/', component: Home },
  { path:'/NewEmployee',component: NewEmployee},
  { path:'/NewCustomer',component: NewCustomer},
  { path:'/RoleCRUD',component: RoleCreation },
  { path:'/LoginPage',component: LoginPage},
  { path:'/ForgotPassword',component: ForgotPassword},
  { path:'/Timesheet',component: Timesheet}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
