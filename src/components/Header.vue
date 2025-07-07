<template lang="">
    <div class="fixed top-0 right-0 left-0">
        <h1 class="text-4xl font-bold text-blue-600">{{name}}</h1>
        <Menu></Menu>
    </div>
</template>
    <script>
    import { ref } from 'vue';
    import Menu from './Menu.vue';
    export default {
        components: {
            Menu
        },
        setup() {
            const logo = ref('');
            const name = ref('Nguyễn Châu Thạch');

            // expose the ref to the template
            return {
                logo,
                name
            }
        }
    }
    </script>
<style lang="">
    
</style>