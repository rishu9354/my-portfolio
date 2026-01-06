<template>
    <header ref="navHeader" class="fixed top-0 left-0 w-full z-[100] transition-transform duration-500 bg-transparent">
        <nav class="py-2 px-6 md:px-20 border-b border-white/5 backdrop-blur-md bg-zinc-950/80">
           <div class="flex justify-between items-center max-w-7xl mx-auto">
            <NuxtLink to="/" class="group overflow-hidden">
                    <h1 class="text-2xl font-bold tracking-tighter uppercase relative">
                        <span class="block group-hover:-translate-y-full transition-transform duration-500 text-white">- Rishabh -</span>
                        <span class="block absolute top-full left-0 text-violet-500 group-hover:-translate-y-full transition-transform duration-500">Portfolio</span>
                    </h1>
                </NuxtLink>

        <div class="hidden md:flex space-x-10 items-center">
                    <a v-for="link in navLinks" :key="link.name" :href="link.path" class="nav-item text-sm font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                        {{ link.name }}
                    </a>
                    
                    <NuxtLink to="/contact" class="group relative px-6 py-2 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900 text-white">
                        <span class="relative z-10 flex items-center gap-2">
                            Get in touch
                            <Icon icon="mdi:arrow-top-right" width="18" class="group-hover:rotate-45 transition-transform duration-300"/>
                        </span>
                        <div class="absolute inset-0 bg-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </NuxtLink>
                </div>
                <button class="md:hidden z-[110] relative text-white" @click="toggleMenu">
                    <Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu-variant'" width="32" height="32"/>
                </button>
           </div>
  </nav>
</header>
 <Transition name="menu">
        <div v-if="isOpen" class="fixed inset-0 bg-zinc-950 z-[105] flex flex-col items-center justify-center space-y-8">
            <a 
                v-for="(link, i) in navLinks" 
                :key="link.name" 
                :href="link.path" 
                class="mobile-link text-5xl font-black uppercase tracking-tighter text-white hover:text-violet-500"
                @click="toggleMenu"
            >
                {{ link.name }}
            </a>
        </div>
    </Transition>
<!-- scrollTotop btn -->
<button 
        v-if="showButton" 
        @click="scrollToTop" 
        class="fixed bottom-8 right-8 p-4 rounded-full bg-violet-600 text-white shadow-2xl z-[90] hover:scale-110 transition-transform active:scale-90"
    >
        <Icon icon="mdi:chevron-up" width="24" height="24"/>
    </button>

</template>
 
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const isOpen = ref(false);
const showButton = ref(false);
const navHeader = ref(null)

const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'History', path: '#experince' },
    { name: 'Work', path: '#projects' },
    {name: 'Pricing', path: '#pricing'},
    { name: 'Client', path: '#testimonial' },
]

let lastScroll = 0;
let lenis:any;

const toggleMenu = ()=>{
    isOpen.value = !isOpen.value;
    document.body.style.overflow = isOpen.value ?'hidden':'';
};

//scroll listen
const handleScroll = ()=>{
    const currentScroll = window.scrollY;
    showButton.value = currentScroll > 1500;

    // hide/show navbar logic
    if(currentScroll >lastScroll && currentScroll> 100){
        // hide nav
        gsap.to(navHeader.value,{
            yPercent:-100,
            duration:0.4,
            ease:"power2.inOut"
        });
    } else{
         gsap.to(navHeader.value,{
            yPercent:0,
            duration:0.4,
            ease:"power2.inOut"
        });
    }
    lastScroll = currentScroll;
};

// smooth scroll using lenis
const scrollToTop = () =>{
    // const lenis = new Lenis();
    lenis?.scrollTo(0,{duration:1.5})
}

onMounted(()=>{
// Initialize Lenis for Smooth Scrolling site-wide
    lenis = new Lenis();
    function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    window.addEventListener('scroll', handleScroll);
})

onUnmounted(()=>{
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Mobile Menu Animation */
.menu-enter-active, .menu-leave-active {
    transition: clip-path 0.7s cubic-bezier(0.77, 0, 0.175, 1);
}
.menu-enter-from, .menu-leave-to {
    clip-path: circle(0% at 100% 0%);
}
.menu-enter-to, .menu-leave-from {
    clip-path: circle(150% at 100% 0%);
}

/* Nav Item Underline Effect */
.nav-item {
    position: relative;
}
.nav-item::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -4px;
    left: 0;
    background-color: #8b5cf6;
    transition: width 0.3s ease;
}
.nav-item:hover::after {
    width: 100%;
}
</style>