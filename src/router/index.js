import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalhesPassagem from '@/views/DetalhesPassagem.vue'
import hotel from '@/views/hotel.vue'
import pacote from '@/views/pacote.vue'
import Descpacote from '@/views/Descpacote.vue'
import inicio from '@/views/inicio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/passagem/:id',
      name: 'passagem',
      component: DetalhesPassagem,
      props: true
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hotel/:id',
      name: 'hotel',
      component: hotel,
      props: true
    },
    {
      path: '/pacote/:id',
      name: 'pacote',
      component: pacote,
      props: true
    },
    {
      path: '/Descpacote/:id',
      name: 'Descpacote',
      component: Descpacote,
      props: true
    },
    {
      path: '/inicio/:id',
      name: 'inicio',
      component: inicio,
      props: true
    }

  ]


})

export default router
