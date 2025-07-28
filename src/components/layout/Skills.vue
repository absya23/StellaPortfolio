<template>
    <section class="mt-32 relative" id="skills">
        <SectionHeader title="My Skills"/>
        <div class="mt-20 flex justify-center">
            <ul class="flex flex-wrap justify-center items-center">
                <li 
                    ref="skillRefs"
                    v-for="(element, index) in skills" :key="element.id" :class="`mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t ${element.bgGradient}`"
                >
                    <div class="rounded-[12px] bg-primary mt-[3px] p-12 md:p-5 text-center">
                        <h3 class="font-bold text-[35px] text-white flex items-center justify-center">
                            <CountUp v-if="visibleItems[index]" :endVal="element.percentage" :startVal="0" :duration="2"></CountUp>%
                        </h3>
                        <p class="font-normal text-[16px]" :style="{color: element.textColor}">{{ element.title }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import SectionHeader from '../UI/SectionHeader.vue';
const skills = ref([
    {
        id: 1,
        percentage: 98,
        title: 'Figma',
        bgGradient: 'to-[#acac39] from-[#1f1e1c99]',
        textColor: '#FFE600'
    },
    {
        id: 2,
        percentage: 50,
        title: 'C++',
        bgGradient: 'to-[#59c37899] from-[#1f1e1c99]',
        textColor: '#59c378'
    },
    {
        id: 3,
        percentage: 88,
        title: 'Photoshop',
        bgGradient: 'to-[#dd584f99] from-[#1f1e1c99]',
        textColor: '#dd584f'
    },
    {
        id: 4,
        percentage: 88,
        title: 'VueJs',
        bgGradient: 'to-[#ff9a0099] from-[#1f1e1c99]',
        textColor: '#ff9a00'
    },
    {
        id: 4,
        percentage: 88,
        title: 'ReactJs',
        bgGradient: 'to-[#00a9ff99] from-[#1f1e1c99]',
        textColor: '#00a9ff'
    },
    {
        id: 5,
        percentage: 43,
        title: 'PHP',
        bgGradient: 'to-[#9e00ff99] from-[#1f1e1c99]',
        textColor: '#9e00ff'
    },
    {
        id: 6,
        percentage: 92,
        title: 'HTML',
        bgGradient: 'to-[#acac39] from-[#1f1e1c99]',
        textColor: '#ffe600'
    },
    {
        id: 7,
        percentage: 92,
        title: 'Javascript',
        bgGradient: 'to-[#59c37899] from-[#1f1e1c99]',
        textColor: '#59c378'
    },
])

const visibleItems = ref(skills.value.map(() => false));
const skillRefs = ref([]);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    const index =  skillRefs.value.indexOf(entry.target);
                    if(index !== -1) {
                        visibleItems.value[index] = true;
                    }
                }
            })
        },
        {
            threshold: 0.3,
        }
    )
    skillRefs.value.forEach(el => observer.observe(el));
})
</script>
<style>
    
</style>