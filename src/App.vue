<script setup>
import { defineAsyncComponent, Suspense } from 'vue';
const Navbar = defineAsyncComponent(() => import('@/components/layout/Navbar.vue'))
const HeroSection = defineAsyncComponent(() => import('@/components/layout/HeroSection.vue'))
const Counter = defineAsyncComponent(() => import('@/components/layout/Counter.vue'))
const Service = defineAsyncComponent(() => import('@/components/layout/Service.vue'))
const Skills = defineAsyncComponent(() => import('@/components/layout/Skills.vue'))
const Whyme = defineAsyncComponent(() => import('@/components/layout/Whyme.vue'))
const Projects = defineAsyncComponent(() => import('@/components/layout/Projects.vue'))
const Contact = defineAsyncComponent(() => import('@/components/layout/Contact.vue'))
const Footer = defineAsyncComponent(() => import('@/components/layout/Footer.vue'))
const BackToTop = defineAsyncComponent(() => import('@/components/layout/BackToTop.vue'))
import LoadingSpinner from './components/layout/LoadingSpinner.vue';
 </script>

<template>
  <div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
    <Suspense>
      <template #default>
        <div>
          <Navbar/>
          <HeroSection/>
          <Counter/>
          <Service/>
          <Skills/>
          <Whyme/>
          <Projects/>
          <Contact/>
          <Footer/>
          <BackToTop/>
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <LoadingSpinner/>
        </div>
      </template>
    </Suspense>

  </div>
</template>


