<template>
    <div>
        <header class="fixed top-0 left-0 w-full h-full">
            <div class="flex justify-between items-center lg:px-12 relative z-20">
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
                            <a :href="Item.href" class="block transition ease-linear md:text-lg lg:text-xl font-bold text-white md:text-primary hover:text-secondary dark:text-white dark:hover:text-secondary bg-transparent" @click="scrollToSection(Item.href)">{{ Item.name }}</a>
                        </li>
                    </ul>
                    <button @click="toggleDarkMode" class="text-white ml-20 z-10 hidden md:block">
                        <Icon v-if="!isDarkMode" icon="material-symbols-light:moon-stars" class="text-5xl text-primary"></Icon>
                        <Icon v-else icon="material-symbols-light:sunny" class="text-5xl text-secondary"></Icon>
                    </button>
                </nav>
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
        section.scrollToView({behavior: 'smooth'});
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
