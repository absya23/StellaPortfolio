<template>
    <section id="whyme" class="relative mt-32">
        <SectionHeader title="Why me?"/>
        <div class="grid grid-cols-1 lg:grid-cols-2 p-12 overflow-hidden">
            <Education data-aos="fade-left"/>
            <Experience data-aos="fade-right"/>
        </div>
    </section>
</template>
<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Education from './Education.vue';
import Experience from './Experience.vue';

</script>
