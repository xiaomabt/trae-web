<script setup lang="ts">
import { Shield, Lock, Globe } from 'lucide-vue-next'

const privacyItems = [
  {
    icon: Shield,
    title: '数据隐私保护',
    description: '代码文件默认保存在用户本地设备。为生成索引，文件可能会被临时上传以计算嵌入。处理完成后，所有明文数据将被删除。你也可以通过隐私模式或忽略功能来限制数据的使用。',
  },
  {
    icon: Lock,
    title: '安全访问控制',
    description: '通过严格的访问权限管理和加密传输机制，防止未经授权的访问，降低安全风险。',
  },
  {
    icon: Globe,
    title: '区域化部署',
    description: '用户数据与服务基础设施依据账号归属地进行存储与部署，并通过隔离机制满足当地数据法规的合规要求。',
  },
]
</script>

<template>
  <section id="pricing" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          隐私与安全
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          我们始终致力于保护用户的隐私与数据安全，坚持"本地优先"和"最小化数据收集"的原则。
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in privacyItems"
          :key="index"
          class="group bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
        >
          <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
            <component :is="item.icon" :size="28" class="text-white" />
          </div>
          <h3 class="text-xl font-bold text-white mb-4">
            {{ item.title }}
          </h3>
          <p class="text-gray-400 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>