<template>
    <section class="mt-32" id="contact">
        <SectionHeader title="Contact me"/>
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form action="" class="space-y-8">
                <div v-for="input in inputs" :key="input.id" >
                    <Input 
                        :id="input.id" 
                        :type="input.type" 
                        :label="input.label" 
                        :placeholder="input.placeholder"/>
                </div>
                <div class="flex justify-between">
                    <Button label="Send"/>
                    <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
                        <a href="" class="text-gray-600 hover:text-blue-500">
                            <Icon icon="fa-brands:twitter" class="font-size: 2rem"/>
                        </a>
                        <a href="" class="text-gray-600 hover:text-blue-700">
                            <Icon icon="fa-brands:linkedin" class="font-size: 2rem"/>
                        </a>
                        <a href="" class="text-gray-600 hover:text-gray-800">
                            <Icon icon="fa-brands:github" class="font-size: 2rem"/>
                        </a>
                        <a href="" class="text-gray-600 hover:text-pink-500">
                            <Icon icon="fa-brands:instagram" class="font-size: 2rem"/>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup>
import SectionHeader from '../UI/SectionHeader.vue';
import Button from '../UI/Button.vue';
import Input from '../UI/Input.vue';
import { ref } from 'vue';

const inputs = ref([
    {
        id: 'email', 
        label: 'Your email', 
        type: 'email', 
        placeholder: 'email@example.com'
    },
    {
        id: 'subject', 
        label: 'Subject', 
        type: 'text', 
        placeholder: 'Let us know how we can help you'
    },
    {
        id: 'message', 
        label: 'Message', 
        type: 'textarea', 
        placeholder: 'Leave a comment',
        rows: 6,
    }
]);
</script>
<style>
    
</style>