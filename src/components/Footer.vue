<script setup lang="ts">
import { Download, Phone, MapPin, MessageCircle } from 'lucide-vue-next'

const footerLinks = {
  product: [
    { name: 'TRAE IDE', href: '#' },
    { name: 'TRAE SOLO', href: '#' },
    { name: '定价方案', href: '/pricing' },
    { name: '更新日志', href: '#' },
  ],
  resources: [
    { name: '文档中心', href: '/docs' },
    { name: 'API 文档', href: '#' },
    { name: '开发者社区', href: '#' },
    { name: '帮助中心', href: '#' },
  ],
  company: [
    { name: '关于我们', href: '#' },
    { name: '加入我们', href: '#' },
    { name: '联系方式', href: '#contact' },
    { name: '合作伙伴', href: '#' },
  ],
  legal: [
    { name: '隐私政策', href: '#' },
    { name: '服务条款', href: '#' },
    { name: '安全说明', href: '#' },
  ],
}
</script>

<template>
  <footer id="docs" class="bg-black/50 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid lg:grid-cols-5 gap-12">
        <div class="lg:col-span-2">
          <router-link to="/" class="flex items-center space-x-2 mb-6">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <span class="text-white font-bold text-sm">T</span>
            </div>
            <span class="text-xl font-semibold text-white">TRAE</span>
          </router-link>
          <p class="text-gray-400 mb-6 max-w-sm">
            TRAE IDE 是一款集成 AI 的智能开发环境，致力于提升开发者的生产力，让开发更高效、更智能。
          </p>
          <button class="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium hover:opacity-90 transition-opacity">
            <Download :size="20" />
            <span>下载 TRAE IDE</span>
          </button>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">产品</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.product" :key="link.name">
              <router-link
                v-if="link.href.startsWith('/')"
                :to="link.href"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </router-link>
              <a
                v-else
                :href="link.href"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">资源</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.resources" :key="link.name">
              <router-link
                v-if="link.href.startsWith('/')"
                :to="link.href"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </router-link>
              <a
                v-else
                :href="link.href"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">公司</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.company" :key="link.name">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex flex-wrap justify-center md:justify-start gap-6 text-gray-400">
            <a href="#" class="flex items-center space-x-2 hover:text-white transition-colors">
              <Phone :size="16" />
              <span>400-110-6667</span>
            </a>
            <a href="#" class="flex items-center space-x-2 hover:text-white transition-colors">
              <MapPin :size="16" />
              <span>北京市海淀区北三环西路甲23号院</span>
            </a>
            <a href="#" class="flex items-center space-x-2 hover:text-white transition-colors">
              <MessageCircle :size="16" />
              <span>关注微信公众号</span>
            </a>
          </div>
          <div class="flex flex-wrap justify-center gap-4 text-gray-400">
            <a
              v-for="link in footerLinks.legal"
              :key="link.name"
              :href="link.href"
              class="hover:text-white transition-colors"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="text-center text-gray-500 mt-8 text-sm">
          Copyright 2024 TRAE. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>