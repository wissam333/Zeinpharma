import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import GalleryView from '../views/GalleryView.vue'
import JobsView from '../views/JobsView.vue'
import NewsView from '../views/NewsView.vue'
import PartnersView from '../views/PartnersView.vue'
import ProductView from '../views/ProductView.vue'
import ItemView from '../views/ItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/ContactView',
      name: 'ContactView',
      component: ContactView
    },
    {
      path: '/GalleryView',
      name: 'GalleryView',
      component: GalleryView
    },
    {
      path: '/JobsView',
      name: 'JobsView',
      component: JobsView
    },
    {
      path: '/NewsView',
      name: 'NewsView',
      component: NewsView
    },
    {
      path: '/PartnersView',
      name: 'PartnersView',
      component: PartnersView
    },
    {
      path: '/ProductView/:category',
      name: 'ProductView',
      component: ProductView
    },
    {
      path: '/ItemView/:id',
      name: 'ItemView',
      component: ItemView
    }
  ]
})

export default router
