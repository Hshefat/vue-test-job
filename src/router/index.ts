import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: () => import('../views/admin/Admin.vue'),
            // http://localhost:8081/admin 

    children: [
      {
        path: 'products',
        name: 'Products-Page',
        component: () => import('../views/admin/Products.vue'),
        // http://localhost:8081/admin/products 
      },
      {
        path: 'products/create',
        name: 'Create-Products',
        component: () => import('../views/admin/CreateProducts.vue'),
        // http://localhost:8081/admin/products/create
      },
      {
        path: 'products/:id/edit',
        name: 'Edit-Products',
        component: () => import('../views/admin/EditProducts.vue'),
        props: true 
      },
    
    ]
  },
  {
    path: '/testPage',
    name: 'Test-Page',
    component: () => import('../views/TestJob.vue')
     // http://localhost:8081/testPage 
  },




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
