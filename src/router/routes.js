
const routes = [
  {
    path: '/',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/Login.vue') }
    ]
  },
  {
    path: '/panel',
    component: () => import('layouts/Panel.vue'),
    children: [
      { path: '', component: () => import('pages/Panel/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
