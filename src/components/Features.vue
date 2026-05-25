<script setup lang="ts">
import { ref } from 'vue'
import { Code2, Bot, GitBranch, Puzzle } from 'lucide-vue-next'

const features = [
  {
    id: 0,
    icon: Code2,
    title: '全场景提效',
    description: 'TRAE 覆盖从编码、调试到测试、重构、部署等多类开发任务，支持代码续写、文档生成、逻辑审查与结构优化等，适配多种日常开发场景，帮助开发者减少重复操作，专注核心创新。',
    image: 'https://aka.doubaocdn.com/s/9zv71wTsFR',
  },
  {
    id: 1,
    icon: Bot,
    title: 'AI Coding Agent',
    description: 'TRAE 内置的 SOLO 模式，配备专属 Coding Agent，可理解目标、规划任务并调度工具，独立推进各阶段开发工作。从自然语言输入到可执行产出，帮助你高效完成开发任务。',
    image: 'https://aka.doubaocdn.com/s/fCzt1wTsFR',
  },
  {
    id: 2,
    icon: GitBranch,
    title: '双重开发模式',
    description: 'TRAE 不仅将 AI 集成进 IDE，也让 AI 使用更多开发工具。TRAE 目前拥有双重开发模式，IDE 模式保留原有流程，控制感更强；SOLO 模式让 AI 主导任务，自动推进开发任务。你可根据任务需求自由切换，始终游刃有余。',
    image: 'https://aka.doubaocdn.com/s/ltcK1wTsFR',
  },
  {
    id: 3,
    icon: Puzzle,
    title: '开放智能体生态',
    description: '可自动拆分复杂任务，带来流畅交付体验。也支持独立创建 Agent 并分享到市场，像插件一样灵活组合智能体，适配不同开发需求。',
    image: 'https://aka.doubaocdn.com/s/DXi41wTsFR',
  },
]

const activeIndex = ref(0)

const setActiveIndex = (index: number) => {
  activeIndex.value = index
}
</script>

<template>
  <section id="features" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          TRAE 为你解锁 <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">全新可能</span>
        </h2>
        <div class="flex justify-center space-x-4 mb-8">
          <button
            v-for="(feature, index) in features"
            :key="feature.id"
            @click="setActiveIndex(index)"
            :class="[
              'w-8 h-8 rounded-full text-sm font-medium transition-all',
              activeIndex === index
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            ]"
          >
            {{ String(index).padStart(2, '0') }}
          </button>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative order-2 lg:order-1">
          <div class="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl" />
          <div class="relative bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-2 overflow-hidden">
            <img
              :src="features[activeIndex].image"
              :alt="features[activeIndex].title"
              class="w-full h-auto rounded-lg transition-opacity duration-500"
            />
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <component :is="features[activeIndex].icon" :size="28" class="text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white">
              {{ features[activeIndex].title }}
            </h3>
          </div>
          <p class="text-gray-400 text-lg leading-relaxed">
            {{ features[activeIndex].description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>