<template>
    <article class="max-w-sm overflow-hidden shadow-lg rounded border border-secondary dark:bg-[#ffffff29] bg-primary">
        
        <figure>
            <img :src="resolvedImage" :alt="title" class="w-full h-48 object-cover">
        </figure>

        <section class="px-6 py-6">
            <header>
                <h3 class="font-bold text-xl mb-2 text-white">{{ title }}</h3>
            </header>
            <p class="text-gray-300 text-sm">{{ description }}</p>
        </section>

        <footer class="px-6 pt-4 pb-2">
            <ul class="flex flex-wrap gap-2">
                <li v-for="(tag,index) in tags" :key="index" class="inline-block dark:bg-primary bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                    #{{ tag }}
                </li>
            </ul>
        </footer>

        <div class="px-6 pb-4 flex justify-between items-center">
            <a :href="liveLink" v-if="liveLink" class="text-secondary font-semibold hover:underline text-sm">Live Demo</a>
            <a :href="codeLink" v-if="codeLink" class="text-secondary font-semibold hover:underline text-sm">View Code</a>
        </div>
    </article>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Project title',
    },
    description: {
        type: String,
        required: true,
        default: 'Brief description of the project',
    },
    image: {
        type: String,
        required: true,
        default: '/',
    },
    tags: {
        type: Array,
        required: true,
        default: () => ['VueJs', 'Tailwind CSS'],
    },
    liveLink: {
        type: String,
        required: true,
        default: null,
    },
    codeLink: {
        type: String,
        required: true,
        default: null,
    },
})
const resolvedImage = computed(() => {
    return '/src/assets/images/'+props.image;
})
</script>
<style>
    
</style>