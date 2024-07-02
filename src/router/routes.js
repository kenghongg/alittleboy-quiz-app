const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    meta: { auth: false }
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    meta: { auth: true }
  },
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
    meta: { auth: false }
  },
  {
    path: '/register',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', component: () => import('pages/RegisterPage.vue') }],
    meta: { auth: false }
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SettingsPage.vue') },
      { path: 'personal-info', component: () => import('pages/PersonalInfoPage.vue') },
      { path: 'account', component: () => import('pages/AccountPage.vue') },
      { path: 'notifications', component: () => import('pages/NotificationsPage.vue') },
      { path: 'security-privacy', component: () => import('pages/SecurityPrivacyPage.vue') },
      { path: 'support', component: () => import('pages/PersonalInfoPage.vue') }
    ],

    meta: { auth: true }
  },
  {
    path: '/game',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/InGamePage.vue') }],
    meta: { auth: true }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
