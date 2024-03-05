import { createRouter, createWebHistory } from 'vue-router';

const Home = { template: '<div>Home</div>' };

const routes = [{ path: '/', name: 'home', component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
