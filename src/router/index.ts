import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PricingPage from '@/pages/PricingPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingPage,
  },
  {
    path: '/blog',
    name: 'blog',
    component: {
      template: '<div class="min-h-screen py-24"><div class="max-w-7xl mx-auto px-4"><h1 class="text-4xl font-bold text-white text-center mb-8">技术博客</h1><p class="text-gray-400 text-center">更多文章即将推出...</p></div></div>',
    },
  },
  {
    path: '/docs',
    name: 'docs',
    component: {
      template: '<div class="min-h-screen py-24"><div class="max-w-7xl mx-auto px-4"><h1 class="text-4xl font-bold text-white text-center mb-8">文档中心</h1><p class="text-gray-400 text-center">文档内容即将推出...</p></div></div>',
    },
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: {
      template: '<div class="min-h-screen py-24"><div class="max-w-7xl mx-auto px-4"><h1 class="text-4xl font-bold text-white text-center mb-8">解决方案</h1><p class="text-gray-400 text-center">解决方案内容即将推出...</p></div></div>',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router