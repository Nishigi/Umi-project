import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/user/list', component: '@/pages/user/list' },
    { path: '/user/info/:id', component: '@/pages/user/info' }
  ],
  fastRefresh: {},
  history: { type: 'hash' },
  dva: {
    immer: true
  },
  layout: {
    name: 'Gs',
    locale: true,
    layout: 'side'
  }
});
