
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/home/home.vue';
import Batman from '../pages/batman/Batman.vue';
import Catwoman from '../pages/catwoman/Catwoman.vue';
import Questions from '../pages/questions/Questions.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/batman',
      name: 'Batman',
      component: Batman
    },
    {
      path: '/catwoman',
      name: 'Catwoman',
      component: Catwoman
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
});
