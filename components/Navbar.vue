<template>
        <nav class="py-6 px-6 md:px-20 bg-zinc-900 text-white">
           <div class="flex justify-between items-center">
            <!-- brand name -->
               <NuxtLink to="/">
               <h1 class="text-3xl font-extralight">Rishabh</h1>
           </NuxtLink>

           <!-- humburger menu btn -->
            <button class="md:hidden" @click="isOpen =!isOpen">
                <Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" width="28" height="28"/>
            </button>
       <!-- desktop menu -->
        <div class="hidden md:flex space-x-14 items-center">
            <a href="#about" class="nav-link">About Me</a>
            <a href="#skills" class="nav-link">Work</a>
            <a href="#experince" class="nav-link">Experience</a>
            <a href="#testimonial" class="nav-link">Testimonial</a>
            <NuxtLink to="/contact" class="flex rounded-3xl bg-black text-white py-3 px-4 text-xl justify-between w-max">
                Get in touch
                <Icon icon="mdi:arrow-top-right-thin" :ssr="true" width="24" height="24" class="rounded-full bg-white text-black ml-2 "/>
    
            </NuxtLink>
        </div>
           </div>

           <!-- mobile view -->
            <div class="flex flex-col space-y-4 mt-6 md:hidden" v-if="isOpen">
                <a href="#about" class="nav-link" @click="isOpen = false">About Me</a>
      <a href="#skills" class="nav-link" @click="isOpen = false">Work</a>
      <a href="#experince" class="nav-link" @click="isOpen = false">Experience</a>
      <a href="#testimonial" class="nav-link" @click="isOpen = false">Testimonial</a>
      <NuxtLink to="/contact" class="flex rounded-3xl bg-black text-white py-3 px-4 text-xl justify-between w-max" @click="isOpen = false">
        Get in touch
        <Icon icon="mdi:arrow-top-right-thin" width="24" height="24" class="rounded-full bg-white text-black ml-2"/>
      </NuxtLink>
            </div>
    </nav>
<!-- scrollTotop btn -->
    <button v-if="showButton" @click="scrollToTop" class="fixed bottom-6 right-6 p-3 rounded-full bg-black text-white shadow-lg z-50 hover:bg-zinc-800 transition ">
<Icon icon="mdi:arrow-up" width="24" height="24"/>
</button>
</template>
 
<script setup lang="ts">
import { Icon } from "@iconify/vue";

const isOpen = ref(false);

import Lenis from 'lenis'

const showButton = ref(false);

//scroll listen
const handleScroll = ()=>{
    showButton.value = window.scrollY > 3000;
}

// smooth scroll using lenis

const scrollToTop = () =>{
    const lenis = new Lenis();
    lenis.scrollTo(0,{duration:1.2, easing: (t) => 1 - Math.pow(1 - t,4) })
}

onMounted(()=>{

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(()=>{
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>

</style>