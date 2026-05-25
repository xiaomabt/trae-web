<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: '产品', href: '#features', type: 'anchor' },
  { name: '解决方案', href: '/solutions', type: 'route' },
  { name: '定价', href: '/pricing', type: 'route' },
  { name: '文档', href: '/docs', type: 'route' },
  { name: '博客', href: '/blog', type: 'route' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
            <span class="text-white font-bold text-sm">T</span>
          </div>
          <span class="text-xl font-semibold text-white">TRAE</span>
        </router-link>

        <nav class="hidden md:flex items-center space-x-8">
          <template v-for="link in navLinks" :key="link.name">
            <a
              v-if="link.type === 'anchor'"
              :href="link.href"
              class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {{ link.name }}
            </a>
            <router-link
              v-else
              :to="link.href"
              class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {{ link.name }}
            </router-link>
          </template>
        </nav>

        <div class="hidden md:flex items-center space-x-4">
          <button class="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
            登录
          </button>
          <button class="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
            免费试用
          </button>
        </div>

        <button
          class="md:hidden p-2 text-gray-300 hover:text-white"
          @click="toggleMobileMenu"
        >
          <X v-if="isMobileMenuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
    >
      <nav class="px-4 py-4 space-y-3">
        <template v-for="link in navLinks" :key="link.name">
          <a
            v-if="link.type === 'anchor'"
            :href="link.href"
            class="block py-2 text-gray-300 hover:text-white transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </a>
          <router-link
            v-else
            :to="link.href"
            class="block py-2 text-gray-300 hover:text-white transition-colors"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </router-link>
        </template>
        <div class="pt-4 border-t border-white/10 space-y-3">
          <button class="w-full py-2 text-gray-300 hover:text-white transition-colors text-left">
            登录
          </button>
          <button class="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium">
            免费试用
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>