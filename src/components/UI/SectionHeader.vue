<template>
    <div class="">
        <header class="absolute pointer-events-none w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
         <header class="absolute pointer-events-none w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
    </div>
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-secondary stroke-text-primary dark:stroke-text-secondary" data-aos="fade-up">{{ title }}</h2>
</template>
<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    }
})
</script>