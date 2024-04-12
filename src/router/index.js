import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Menu from '../components/Menu.vue';
import About from '../components/About.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: Home },
    { path: '/menu', component: Menu },
    { path: '/about', component: About },
  ]
});

export default router;
