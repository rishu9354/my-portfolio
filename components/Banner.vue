<template>


   <section class="bg-zinc-50 dark:bg-zinc-900 py-20 px-6 text-center">
      <client-only>
         <div class="flex flex-wrap justify-center gap-2 text-center mb-16">
          <span v-for="(word, index) in quotes" :key="index"
               class="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-300 dark:text-zinc-600 leading-snug">
            {{ word }}
          </span>
         </div>
         <!-- tech stack -->
         <p class="mt-10 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-semibold max-w-4xl mx-auto leading-relaxed">
   
            My tech stack includes
            <span class="text-black dark:text-white font-bold">@Java</span> and
            <span class="text-black dark:text-white font-bold">@NodeJS</span> for backend development,
            <span class="text-black dark:text-white font-bold">@Vue.Js</span> and
            <span class="text-black dark:text-white font-bold">@NuxtJS</span> for frontend projects when needed.
            I work extensively with
            <span class="text-black dark:text-white font-bold">@Redis</span> for cloud Storage, and
            <span class="text-black dark:text-white font-bold">@MySQL</span> and
            <span class="text-black dark:text-white font-bold">@mongoDB</span> for data Storage.
         </p>

      </client-only>


   </section>
</template>

<script setup>
// import * as anime from 'animejs'
const tagline = "I don’t chase trends—I build what solves real problems."
const quotes = tagline.split(" ");
// const wordRefs =[];
// const para = ref(null);
// onMounted(()=>{
//    anime.default({
//       targets:wordRefs,
//       opacity:[0,1],
//       translateY:[30,0],
//       easing:'easeOutQuad',
//       delay:anime.stagger(100),
//       duration:800
//    })
//    anime.default({
//     targets: para.value,
//     opacity: [0, 1],
//     translateY: [30, 0],
//     delay: quotes.length * 100 + 400,
//     duration: 800,
//     easing: 'easeOutQuad'
//   })
// })
</script>