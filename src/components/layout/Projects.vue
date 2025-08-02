<template>
    <section id="projects" class="relative w-11/12 pt-1 pb-5 mx-auto mt-32">
        <SectionHeader title="My Projects"/>
        <!-- navigation -->
        <button class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
            <Icon icon="line-md:arrow-left" class="font-bold text-3xl"/>
        </button>
        <button class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
            <Icon icon="line-md:arrow-right" class="font-bold text-3xl"/>
        </button>
        <!-- slide -->
        <swiper
            :effect="'coverflow'"
            grab-cursor
            centeredSlides
            :slidesPerView="'auto'"
            :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }"
            :navigation="navigationOptions"
            loop
            :pagination="{
                clickable: true,
            }"
            :modules="[EffectCoverflow, Navigation, Pagination]"
            class="max-w-full mt-32"
        >
            <swiper-slide v-for="(project, index) in projects" :key="index" class="max-w-[300px]">
                <ProjectCard
                    :title="project.title"
                    :description="project.description"
                    :image="project.image"
                    :tags="project.tags"
                    :liveLink="project.liveLink"
                    :codeLink="project.codeLink"
                />
            </swiper-slide>
        </swiper>
    </section>
</template>
<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import ProjectCard from '../UI/ProjectCard.vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

const navigationOptions = {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next',
}

const projects = ref([
    {
        title: 'Porfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim optio incidunt, eaque fugit ipsa assumenda labore eveniet recusandae et minima qui porro magni natus distinctio sed consectetur eiu',
        image: 'project.webp',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '',
    },
    {
        title: 'Porfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim optio incidunt, eaque fugit ipsa assumenda labore eveniet recusandae et minima qui porro magni natus distinctio sed consectetur eiu',
        image: 'project.webp',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '',
    },
    {
        title: 'Porfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim optio incidunt, eaque fugit ipsa assumenda labore eveniet recusandae et minima qui porro magni natus distinctio sed consectetur eiu',
        image: 'project.webp',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '',
    },
    {
        title: 'Porfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim optio incidunt, eaque fugit ipsa assumenda labore eveniet recusandae et minima qui porro magni natus distinctio sed consectetur eiu',
        image: 'project.webp',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '',
    },
    {
        title: 'Porfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim optio incidunt, eaque fugit ipsa assumenda labore eveniet recusandae et minima qui porro magni natus distinctio sed consectetur eiu',
        image: 'project.webp',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '',
    },
    {
        title: 'Porfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim optio incidunt, eaque fugit ipsa assumenda labore eveniet recusandae et minima qui porro magni natus distinctio sed consectetur eiu',
        image: 'project.webp',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '',
    },
    {
        title: 'Porfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, enim optio incidunt, eaque fugit ipsa assumenda labore eveniet recusandae et minima qui porro magni natus distinctio sed consectetur eiu',
        image: 'project.webp',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '',
    }

])

</script>
<style setup lang="less">
.swiper-prev,
.swiper-next {
    cursor: pointer;
}
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-pagination {
    position: relative;
    bottom: 0 !important;
    width: fit-content !important;
    margin: 20px auto 0 auto;
    .swiper-pagination-bullet {
        margin: 0 5px;
        color: transparent;
        padding: 0;
        border-radius: 8px;
        background-color: var(--primary-color);
        opacity: .5;
        width: 8px;
        height: 8px;
        transition: 200ms;
        &.swiper-pagination-bullet-active {
            opacity: 1;
            width: 50px;
        }
    }
}
.dark {
    .swiper-pagination {
        .swiper-pagination-bullet {
            background-color: var(--secondary-color);
        }
    }
}
</style>