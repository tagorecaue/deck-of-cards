
export default [
  {
    path: '*',
    redirect: {
      name: 'create-deck'
    }
  },
  {
    path: '/',
    redirect: {
      name: 'create-deck'
    }
  },
  {
    path: '/deck/new',
    name: 'create-deck',
    component: () => import(/* webpackChunkName: "create-deck" */ '@/views/CreateDeck.vue')
  },
  {
    path: '/deck/:id',
    name: 'open-deck',
    component: () => import(/* webpackChunkName: "open-deck" */ '@/views/OpenDeck.vue')
  }
]
