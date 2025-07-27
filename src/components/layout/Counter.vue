<template>
    <section class="mt-20 lg:mt-0 w-full relative text-white flex justify-center">
        
        <ul ref="statsSection" class="relative z-1 p-6 mx-auto w-11/12 lg:mx-0 rounded-3xl border dark:bg-[#ffffff29] bg-primary shadow-lg md:divide-x grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 border-secondary divide-secondary text-white">
            <li class="text-center" v-for="elements in numbers" :key="elements.id">
                <h2 class="font-semibold flex justify-center text-xl sm:text-2xl md:text-4xl w-full">+ <CountUp v-if="hasIntersected" :endVal="elements.number"></CountUp></h2>
                <p class="mt-2">{{ elements.title }}</p>
            </li>
        </ul>
    </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const numbers = ref([
    {id: 1, number: 12, title: 'Created projects'},
    {id: 2, number: 200, title: 'Projects'},
    {id: 3, number: 120, title: 'Happy clients'},
    {id: 4, number: 2, title: 'Years'},
])
const statsSection = ref(null);
const hasIntersected = ref(false);
onMounted(() => {

    const observer = new IntersectionObserver(
        ([entry]) => {
            if(entry.isIntersecting) {
                hasIntersected.value = true;
                observer.disconnect(); //stop observing once it has Intersected
            }
        },
        {threshold: 0.5} //trigger when 50% of the section is visible
    );
    if(statsSection.value) {
        observer.observe(statsSection.value);
    }

})
</script>
<style>
    
</style>