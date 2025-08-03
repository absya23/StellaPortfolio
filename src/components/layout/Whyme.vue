<template>
    <section id="whyme" class="relative mt-32">
        <SectionHeader title="Why me?"/>
        <div class="container p-4 lg:p-0 mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden">
                <Education data-aos="fade-left"/>
                <Experience data-aos="fade-right"/>
            </div>
        </div>
    </section>
</template>
<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Education from './Education.vue';
import Experience from './Experience.vue';

</script>
