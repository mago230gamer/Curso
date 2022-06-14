import { RouteRecordRaw } from 'vue-router';
import Mainlayout from 'layouts/MainLayout.vue'
import Indexpage from 'pages/IndexPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Mainlayout,
    children: [{ path: '', component: Indexpage, }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
