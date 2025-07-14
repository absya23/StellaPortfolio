<template>
    <div>
        <header>
            <div class="flex justify-between items-center lg:px-12 relative z-20">
                <div class="text-3xl font-bold dark:text-white">LOGO</div>
                <!-- mobile toggle button -->
                 <div class="md:hidden z-30">
                    <button class="block focus:out" @click="isMenuOpen = !isMenuOpen">
                        <span v-if="isMenuOpen" class="text-5xl md:text-primary text-white dark:text-white">
                            <Icon icon="mdi:close"></Icon>
                        </span>
                        <span v-else class="text-5xl md:text-primary text-white dark:text-white">
                            <Icon icon="mdi:menu"></Icon>
                        </span>
                    </button>
                 </div>

                 <!-- navbar link -->
                <nav 
                  :class="[
                        `fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row dark:bg-white ${
                            isMenuOpen ? 'block' : 'hidden'
                        }
                        `,
                  ]">
                    <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                        <li v-for="Item in Menu" :key="Item.nsme">
                            <a :href="Item.href" class="block transition ease-linear md:text-lg lg:text-xl font-bold text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary" @click="scrollToSection(Item.href)">{{ Item.name }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const Menu = ref([
    {name: 'Service', href: '#service'},
    {name: 'Skills', href: '#skill'},
    {name: 'Why me', href: '#whyme'},
])
const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if(section) {
        section.scrollToView({behavior: 'smooth'});
    }
}
</script>
