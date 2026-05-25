<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Features from '@/components/Features.vue'
import IDEFeatures from '@/components/IDEFeatures.vue'
import Privacy from '@/components/Privacy.vue'
import Blog from '@/components/Blog.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <Hero />
      <Features />
      <IDEFeatures />
      <Privacy />
      <Blog />
    </main>
    <Footer />
  </div>
</template>