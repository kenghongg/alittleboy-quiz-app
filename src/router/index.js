import { route } from 'quasar/wrappers';
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './routes';
import { LocalStorage } from 'quasar';
import { useQuasar } from 'quasar';
import { useUserStore } from 'stores/user';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });

  Router.beforeEach((to, from, next) => {
    const $q = useQuasar();
    const userStore = useUserStore();
    const status = userStore.status;

    if (to.path === '/login' && status === 'LOGGED_IN') {
      return next('/app');
    }

    // if (to.meta.auth && !LocalStorage.has('user')) {
    if (to.meta.auth && status === 'NON_LOGIN') {
      $q.notify({
        type: 'negative',
        message: 'Please login to continue',
        position: 'top',
        icon: 'report_problem'
      });
      return next('/login');
    }

    // if (!to.meta.auth && LocalStorage.has('user')) {
    if (!to.meta.auth && status === 'LOGGED_IN') {
      return next('/app');
    }

    return next();
  });

  return Router;
});
