<template>
    <section id="services" class="relative text-white mt-32">
        <SectionHeader title="My Services"/>
        <div class="mt-20 py-8 xl:p-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-4">
            <article class="px-[12px] mb-[24px]" v-for="element in services" :key="element.id">
                <div class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] border border-secondary dark:bg-[#ffffff29] bg-primary" data-aos="fade-up" :data-aos-delay="element.id*100">
                    <div class="mt-[-30px] flex justify-center relative">
                        <div class="mt-[-15px] p-[25px]  rounded-[50%]">
                            <span class="p-[10px] m-auto border-[1px] border-solid border-secondary bg-primary inline-block absolute top-[5px] left-[50%] transform -translate-x-1/2 rounded-[50%] z-[5]">
                                <Icon :icon="element.icon"  class="h-[35px] w-[35px] relative z-[1] text-secondary"/>
                            </span>
                        </div>
                    </div>
                    <div class="p-[30px]">
                        <h3 class="uppercase font-semibold text-secondary text-base">{{ element.name }}</h3>
                        <p class="text-[14px] leading-[20px] text-white tracking-[0.03rem]">{{ element.description }}</p>
                    </div>
                </div>    
            </article>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import SectionHeader from '../UI/SectionHeader.vue';
const services = ref([
    {
        id: 1,
        icon: 'hugeicons:web-design-02',
        name: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim. Porro deleniti facere neque quod illo accusantium sapiente minima asperiores voluptatibus magni ullam delectus, quis officia fugit blanditiis velit tempora',
    },
    {
        id: 2,
        icon: 'hugeicons:web-design-02',
        name: 'Technical Writing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim. Porro deleniti facere neque quod illo accusantium sapiente minima asperiores voluptatibus magni ullam delectus, quis officia fugit blanditiis velit tempora',
    },
    {
        id: 3,
        icon: 'hugeicons:web-design-02',
        name: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim. Porro deleniti facere neque quod illo accusantium sapiente minima asperiores voluptatibus magni ullam delectus, quis officia fugit blanditiis velit tempora',
    },
    {
        id: 4,
        icon: 'hugeicons:web-design-02',
        name: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, enim. Porro deleniti facere neque quod illo accusantium sapiente minima asperiores voluptatibus magni ullam delectus, quis officia fugit blanditiis velit tempora',
    }
]);
</script>
<style>
    
</style>