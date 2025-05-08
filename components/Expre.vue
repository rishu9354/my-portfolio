<template>
     <section id="experince" class="py-16 px-6 max-w-5xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">My Experience</h2>
          <div class="relative border-l-2 border-zinc-300 dark:border-zinc-700">
               <div class="mb-10 ml-6" v-for="(item, index) in experience" :key="index">
                    <div
                         class="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 border-4 border-white dark:border-zinc-900">
                    </div>
                    <time class="mb-1 text-sm font-medium text-blue-600">{{ item.period }}</time>
                    <h3 class="text-xl font-semibold font-mono">{{ item.role }}</h3>
                    <p class="text-zinc-500 font-mono">{{ item.company }}</p>
                    <p class="mt-2 text-gray-600 dark:text-gray-400 text-m leading-relaxed">{{ item.desc }}</p>
               </div>
          </div>
     </section>
</template>

<script setup>
// import { Motion } from "@vueuse/motion";
const experience = [
     {
          period: 'Jan 2024 – Present',
          role: 'Java Full Stack Developer',
          company: 'CodeCraft Agency',
          desc: 'Working with Vue.js,Nuxt, Spring Boot and database to create responsive, high-performance web applications. Leading UI design and component architecture.'
     },
     {
          period: 'Jan 2023 – Jun 2023',
          role: 'Freelance Web Developer',
          company: 'Self-employed',
          desc: 'Delivered 5+ projects for clients including portfolio sites and admin panels using Vue, Bootstrap, and Firebase.'
     }
]
</script>