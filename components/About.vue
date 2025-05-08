<script setup lang="ts">


</script>

<template>
    <!-- about section -->
    <section id="about"
        class="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-16 bg-white">

        <motion-div class="md:w-1/2 mb-10 md:mb-0 cursor-pointer" v-motion="{
            initial: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
        }">
            <h1
                class="text-5xl md:text-7xl lg:text-8xl font-light border-transparent border-b-2 hover:border-green-950 hover:text-green-950 hover:font-semibold transition-all duration-300 ease-in-out">
                About Me</h1>
        </motion-div>

        <!-- right card topic -->
        <motion-div v-motion="{
            initial: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, delay: 0.3 } }
        }" class="md:w-1/2 w-full">

            <div
                class="rounded-3xl shadow-2xl p-8 md:p-10bg-white hover:scale-105 transition-transform duration-300 ease-in-out">
                <h1 class="text-3xl md:text-4xl mb-4">
                    👋 Hi, I’m <span class="text-4xl md:text-5xl font-semibold text-violet-700">Rishabh Sharma</span>
                </h1>
                <p class="text-gray-700 text-lg md:text-xl text-justify leading-relaxed">"I'm a Java Full Stack
                    developer with a focus on building
                    dynamic and responsive
                    interfaces using Vue.js, NuxtJs as a Frontend and NodeJS, Spring Boot as a Backend. With a year of
                    hands-on experience, I've created 6-7 projects that span
                    various aspects of web development, including SEO optimization, domain setup, SSL certification, and
                    hosting management. I’m passionate about delivering high-quality, secure, and user-friendly web
                    solutions that make a difference."</p>
            </div>
        </motion-div>

    </section>
</template>