<template>
    <button 
        v-if="isVisible" 
        @click="scrollToTop"
        class="z-100 fixed bottom-4 right-4 bg-gradient-to-r bg-primary dark:bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-blue-500">
        <Icon icon="line-md:arrow-up" class="font-bold "/>
    </button>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isVisible = ref(false);
const handleScrollTop = () => {
    isVisible.value = window.scrollY > 300;
}
const scrollToTop = () => {
    window.scrollTo({top:0,behavior: 'smooth'});
}
onMounted(() => {
    window.addEventListener('scroll', handleScrollTop);
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScrollTop);
})
</script>