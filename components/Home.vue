<template>
    <section id="home" class="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-16 md:px-20 bg-amber-100 overflow-hidden">
        <!-- left content -->
        <div class="md:w-1/2 space-y-6 md:space-y-8 animate-fade-left">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold">Rishabh Sharma</h1>
            <h1 class="text-3xl md:text-5xl lg:text-6xl text-violet-700 font-bold">Java Developer</h1>
            <p class="text-lg md:text-xl text-gray-700">Java Full Stack Developer | Vue.js | Spring Boot | Node.JS | SEO & Hosting
                Knowledge</p>
            <NuxtLink to="/Contact"
                class="inline-block mt-4 px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-950 transition-all duration-300 ">
                Hire Me
            </NuxtLink>
        </div>
        <!-- hero section -->
        <div class="md:w-1/2 flex justify-center relative mt-12 md:mt-0 animate-fade-right">
            <img src="/images/hero.jpeg" alt="hero-img" class="w-[300px] md:w-[400px] h-auto object-cover rounded-2xl shadow-2xl">

        </div>
    </section>

</template>

<script setup>
   
</script>