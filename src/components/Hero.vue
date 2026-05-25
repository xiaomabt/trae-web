<script setup lang="ts">
import { ArrowRight, Download } from 'lucide-vue-next'
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div class="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
    
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
        <span class="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
        <span class="text-sm text-gray-300">全新 SOLO Beta 现已发布</span>
      </div>
      
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span class="text-white">智能无限，</span>
        <br />
        <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">协作无间</span>
      </h1>
      
      <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        TRAE SOLO 独立端围绕真实工作流程进行了整体升级：只需提出任务，执行交给 AI。
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button class="group flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium hover:opacity-90 transition-all hover:scale-105">
          <Download class="mr-2" :size="20" />
          下载 SOLO 移动端
        </button>
        <button class="group flex items-center px-8 py-4 border border-white/20 rounded-xl text-white font-medium hover:bg-white/10 transition-all">
          探索 SOLO 网页版
          <ArrowRight class="ml-2 group-hover:translate-x-1 transition-transform" :size="20" />
        </button>
      </div>
      
      <div class="relative max-w-4xl mx-auto">
        <div class="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl" />
        <div class="relative bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-2">
          <img
            src="https://aka.doubaocdn.com/s/DXi41wTsFR"
            alt="TRAE SOLO Interface"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      
      <div class="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-green-400" />
          <span class="text-sm">桌面端</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-blue-400" />
          <span class="text-sm">网页版</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-purple-400" />
          <span class="text-sm">移动端</span>
        </div>
      </div>
    </div>
  </section>
</template>