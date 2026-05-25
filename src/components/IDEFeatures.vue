<script setup lang="ts">
import { Users, Wrench, Database, Zap } from 'lucide-vue-next'

const ideFeatures = [
  {
    icon: Users,
    title: '自定义智能体，构建专属团队',
    description: 'TRAE 推出全新可自由配置的智能体体系，打造开放的智能体生态。你可以根据需求灵活定义工具、技能和任务逻辑，轻松构建专属的 AI 智能体团队。无论何种职业，TRAE，让 AI 真正为你所用。',
    image: 'https://aka.doubaocdn.com/s/MbXX1wTsFR',
  },
  {
    icon: Wrench,
    title: '工具自由装配，拓展能力边界',
    description: 'TRAE IDE 支持多种外部工具的无缝集成，让你的智能体根据个人需求灵活调用工具，打造独一无二的任务执行能力。通过 MCP（Model Context Protocol），你可以赋予智能体专属的外部资源调用能力。',
    image: 'https://aka.doubaocdn.com/s/KUJA1wTsFR',
  },
  {
    icon: Database,
    title: '更多上下文，更符合个人偏好',
    description: 'TRAE 的理解能力全面升级，不仅可以理解代码仓库、终端信息等 IDE 内信息，还支持更多类型的外部信息理解，你可以联网搜索、上传文档集。更重要的是，你还可以配置自己的 AI 工作规则。',
    image: 'https://aka.doubaocdn.com/s/gD5A1wTsFR',
  },
  {
    icon: Zap,
    title: 'Cue 全新升级，实现智能预测',
    description: '基于优化模型实现精准续写，智能感知仓库上下文与编辑轨迹，自动预测下一改动点。点击 Tab 键即可实现快速跳转并应用建议，提供多行编辑建议与直观 diff 对比。',
    image: 'https://aka.doubaocdn.com/s/2mDI1wTsFR',
  },
]
</script>

<template>
  <section id="solutions" class="py-24 bg-black/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          智能 IDE，将 AI 融入你的工作流
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          TRAE 旗下的 AI IDE 产品，以智能生产力为核心，灵活适配你的开发节奏，与你默契协作，共同实现高效、高质的项目交付。
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(feature, index) in ideFeatures"
          :key="index"
          :class="[
            'group relative bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300',
            index % 2 === 1 ? 'md:mt-16' : ''
          ]"
        >
          <div class="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <component :is="feature.icon" :size="24" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-white">
              {{ feature.title }}
            </h3>
          </div>
          
          <p class="text-gray-400 leading-relaxed mb-6">
            {{ feature.description }}
          </p>
          
          <div class="relative rounded-xl overflow-hidden">
            <img
              :src="feature.image"
              :alt="feature.title"
              class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>