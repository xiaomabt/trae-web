<script setup lang="ts">
import { Check, Zap, Crown, Building2 } from 'lucide-vue-next'

const plans = [
  {
    name: '免费版',
    icon: Zap,
    price: '0',
    period: '永久免费',
    description: '适合个人开发者和小型项目',
    features: [
      '基础 AI 编码辅助',
      '每月 100 次 AI 调用',
      '社区支持',
      '基础代码审查',
      '本地运行',
    ],
    cta: '免费开始',
    highlight: false,
  },
  {
    name: '专业版',
    icon: Crown,
    price: '99',
    period: '/月',
    description: '适合专业开发者和团队',
    features: [
      '高级 AI 编码辅助',
      '无限 AI 调用',
      '优先技术支持',
      '高级代码审查',
      '云端同步',
      '团队协作功能',
      '自定义智能体',
      'API 访问',
    ],
    cta: '立即升级',
    highlight: true,
  },
  {
    name: '企业版',
    icon: Building2,
    price: '联系我们',
    period: '',
    description: '适合大型企业和组织',
    features: [
      '专业版全部功能',
      '私有化部署',
      '专属客户成功经理',
      '定制化开发',
      'SLA 保障',
      '安全合规审计',
      '无限用户',
      '优先更新',
    ],
    cta: '联系销售',
    highlight: false,
  },
]
</script>

<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
          选择适合你的方案
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          从个人开发者到大型企业，我们都有适合你的解决方案
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="[
            'relative rounded-2xl p-8 transition-all duration-300',
            plan.highlight
              ? 'bg-gradient-to-b from-indigo-500/20 to-purple-500/20 border-2 border-indigo-500/50 scale-105'
              : 'bg-black/40 border border-white/10 hover:border-white/20'
          ]"
        >
          <div v-if="plan.highlight" class="absolute -top-4 left-1/2 -translate-x-1/2">
            <span class="px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white text-sm font-medium">
              最受欢迎
            </span>
          </div>

          <div class="flex items-center space-x-3 mb-4">
            <div :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center',
              plan.highlight ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-white/10'
            ]">
              <component :is="plan.icon" :size="24" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-white">{{ plan.name }}</h3>
          </div>

          <div class="mb-4">
            <span class="text-4xl font-bold text-white">{{ plan.price }}</span>
            <span class="text-gray-400">{{ plan.period }}</span>
          </div>

          <p class="text-gray-400 mb-8">{{ plan.description }}</p>

          <ul class="space-y-4 mb-8">
            <li v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-start space-x-3">
              <Check :size="20" class="text-green-400 flex-shrink-0 mt-0.5" />
              <span class="text-gray-300">{{ feature }}</span>
            </li>
          </ul>

          <button :class="[
            'w-full py-3 rounded-xl font-medium transition-all',
            plan.highlight
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90'
              : 'border border-white/20 text-white hover:bg-white/10'
          ]">
            {{ plan.cta }}
          </button>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-gray-400 mb-4">所有方案均包含 14 天免费试用</p>
        <a href="#" class="text-indigo-400 hover:text-indigo-300 transition-colors">
          需要更多信息？联系我们的销售团队
        </a>
      </div>
    </div>
  </div>
</template>