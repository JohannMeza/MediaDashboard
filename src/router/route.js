import { createRouter, createWebHistory } from 'vue-router';

// --- COMPONENTES
import HelloWorld from '../components/HelloWorld.vue';
import Hello from '../components/Hello.vue';

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  }
]

const history = createWebHistory();

const router = new createRouter({
  history,
  routes
})

export default router;