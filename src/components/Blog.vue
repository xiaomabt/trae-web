<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const blogPosts = [
  {
    title: 'TRAE SOLO 全新发布：AI 驱动的智能开发体验',
    excerpt: '探索 TRAE SOLO 的全新功能，体验更智能、更高效的开发方式。',
    date: '2024-01-15',
    tag: '产品更新',
  },
  {
    title: '如何使用 TRAE IDE 提升代码质量',
    excerpt: '深入了解 TRAE IDE 的代码审查功能，帮助你写出更优质的代码。',
    date: '2024-01-10',
    tag: '教程',
  },
  {
    title: '智能体生态：打造专属的 AI 工作流',
    excerpt: '学习如何创建和配置自定义智能体，构建适合自己的开发流程。',
    date: '2024-01-05',
    tag: '技术',
  },
]
</script>

<template>
  <section id="blog" class="py-24 bg-black/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            技术博客
          </h2>
          <p class="text-gray-400 text-lg">
            探索最新的技术文章和产品更新
          </p>
        </div>
        <a href="/blog" class="group flex items-center space-x-2 mt-4 md:mt-0 text-indigo-400 hover:text-indigo-300 transition-colors">
          <span>查看全部文章</span>
          <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="(post, index) in blogPosts"
          :key="index"
          class="group bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 cursor-pointer"
        >
          <span class="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-sm mb-4">
            {{ post.tag }}
          </span>
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
            {{ post.title }}
          </h3>
          <p class="text-gray-400 mb-4">
            {{ post.excerpt }}
          </p>
          <span class="text-gray-500 text-sm">
            {{ post.date }}
          </span>
        </article>
      </div>
    </div>
  </section>
</template>