import { createRouter, createWebHistory } from 'vue-router';

import { SiteName, TitleSeparator, RouterMode } from '@Config';

import Home from '@View/Home.vue';

import PrivacyPolicy from '@View/PrivacyPolicy.vue';
import Refunds from '@View/Refunds.vue';
import Terms from '@View/Terms.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '/refunds',
    component: Refunds,
  },
  {
    path: '/terms',
    component: Terms,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title + TitleSeparator + SiteName;
  next();
});

export default router;
