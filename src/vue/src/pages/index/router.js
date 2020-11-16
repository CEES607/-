import Vue from 'vue';
import VueRouter from 'vue-router';

// 解决点击同一个路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  // {
  //     path: '/概要查询',
  //     component: () => import('../../views/console/main/summary/Summary')
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
