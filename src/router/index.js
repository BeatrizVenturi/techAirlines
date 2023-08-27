import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalhesPassagem from '@/views/DetalhesPassagem.vue'
import hotel from '@/views/hotel.vue'
import pacote from '@/views/pacote.vue'
import Descpacote from '@/views/Descpacote.vue'
import inicio from '@/views/inicio.vue'
import confirmarCompra from '@/views/confirmarCompra.vue'
import minhasCompras from '@/views/minhasCompras.vue'
import centralAjuda from '@/views/centralAjuda.vue'
import reembolso from '@/views/reembolso.vue'
import PagNaoEfet from '@/views/PagNaoEfet.vue'
import mudancaData from '@/views/mudancaData.vue'
import politCria from '@/views/politCria.vue'

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
    },
    {
      path: '/confirmarCompra/:id',
      name: 'confirmarCompra',
      component: confirmarCompra,
      props: true
    },
    {
      path: '/minhasCompras/:id',
      name: 'minhasCompras',
      component: minhasCompras,
      props: true
    },
    {
      path: '/centralAjuda/:id',
      name: 'centralAjuda',
      component: centralAjuda,
      props: true
    },
    {
      path: '/reembolso/:id',
      name: 'reembolso',
      component: reembolso,
      props: true
    },
    {
      path: '/PagNaoEfet/:id',
      name: 'PagNaoEfet',
      component: PagNaoEfet,
      props: true
    },
    {
      path: '/mudancaData/:id',
      name: 'mudancaData',
      component: mudancaData,
      props: true
    },
    {
      path: '/politCria/:id',
      name: 'politCria',
      component: politCria,
      props: true
    }



  ]


})

export default router
