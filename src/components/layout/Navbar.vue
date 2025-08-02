<template>
    <div>
        <header class="fixed py-3 top-0 left-0 w-full z-1000">
            <div class="container mx-auto">
                <div class="flex justify-between items-center rounded-md py-1 lg:py-4 px-2 md:px-3 lg:px-4 relative z-20 bg-[#ffffff14] backdrop-blur-sm">
                <div class="text-3xl font-bold dark:text-white">LOGO</div>
                <!-- mobile toggle button -->
                    <div class="md:hidden z-30">
                        <button class="block focus:out" @click="isMenuOpen = !isMenuOpen">
                            <span v-if="isMenuOpen" class="text-5xl md:text-primary text-white dark:text-white">
                                <Icon icon="material-symbols-light:close-rounded"></Icon>
                            </span>
                            <span v-else class="text-5xl md:text-primary text-white dark:text-white">
                                <Icon icon="material-symbols-light:menu-rounded"></Icon>
                            </span>
                        </button>
                    </div>

                    <!-- navbar link -->
                    <nav 
                    :class="[
                            `fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row ${
                                isMenuOpen ? 'block' : 'hidden'
                            }
                            `,
                    ]">
                        <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                            <li v-for="Item in Menu" :key="Item.name">
                                <button class="block cursor-pointer transition ease-linear md:text-lg lg:text-xl font-bold text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary bg-transparent" @click="scrollToSection(Item.href)">{{ Item.name }}</button>
                            </li>
                        </ul>
                        <button @click="toggleDarkMode" class="text-white ml-20 z-10 hidden md:block">
                            <Icon v-if="!isDarkMode" icon="material-symbols-light:moon-stars" class="text-4xl text-primary"></Icon>
                            <Icon v-else icon="material-symbols-light:sunny" class="text-4xl text-secondary"></Icon>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
        
    </div>
</template>
<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const Menu = ref([
    {name: 'Services', href: '#services'},
    {name: 'Skills', href: '#skills'},
    {name: 'Why me', href: '#whyme'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'},
])
const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if(section) {
        section.scrollIntoView({behavior: 'smooth'});
    }
}

const isDarkMode = ref(localStorage.getItem('theme') === 'dark');
const toggleDarkMode = () => {
    const html = document.documentElement;
    if(isDarkMode.value) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    isDarkMode.value = !isDarkMode.value;
}
</script>
