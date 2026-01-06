<template>
  <section ref="bannerSection" class="cursor-default bg-[#0a0a0a] py-32 px-6 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
    <div class="max-w-6xl mx-auto text-center mb-16 relative z-10">
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-2">
        <span 
          v-for="(word, index) in quotes" 
          :key="index"
          class="quote-word text-4xl sm:text-6xl md:text-7xl font-bold text-zinc-800 leading-tight"
        >
          {{ word }}
        </span>
      </div>
    </div>

    <div ref="techStack" class="mt-12 text-center relative z-10">
      <div class="inline-block px-6 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
          <span class="text-violet-400 text-xs font-mono uppercase tracking-[0.3em]">Core Tech Stack</span>
      </div>
      
      <p class="text-lg sm:text-2xl text-zinc-500 max-w-4xl mx-auto leading-relaxed font-light">
        Harnessing 
        <span class="text-zinc-200 font-medium">@Java</span> & 
        <span class="text-zinc-200 font-medium">@NodeJS</span> for logic, 
        <span class="text-zinc-200 font-medium">@Vue.Js</span> & 
        <span class="text-zinc-200 font-medium">@NuxtJS</span> for interfaces, 
        powered by <span class="text-zinc-200 font-medium">@Redis</span>, 
        <span class="text-zinc-200 font-medium">@MySQL</span> and 
        <span class="text-zinc-200 font-medium">@mongoDB</span>.
      </p>
    </div>
  </section>
</template>

<script setup>
// import * as anime from 'animejs'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const tagline = "I don’t chase trends - I build what solves real problems."
const quotes = tagline.split(" ");

const bannerSection = ref(null);
const techStack = ref(null);

let ctx;

onMounted(()=>{
   ctx = gsap.context(()=>{
      // 1. SET INITIAL STATE IN GSAP (NOT CSS)
    // This is the "Professional" way: hide it with GSAP so GSAP knows how to show it.
    gsap.set(techStack.value, { 
      opacity: 0, 
      y: 50 
    });

    // 2. Quote Highlight Animation
    gsap.to(".quote-word", {
      scrollTrigger: {
        trigger: bannerSection.value,
        start: "top 70%",
        end: "bottom 60%",
        scrub: true,
      },
      color: "#ffffff",
      stagger: 0.1,
    });

    // 3. Tech Stack Reveal
    gsap.to(techStack.value, {
      scrollTrigger: {
        trigger: techStack.value,
        start: "top 90%", // Trigger slightly earlier
        toggleActions: "play none none reverse" 
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out"
    });

      // 3. Floating background glow effect
    const glow = document.createElement('div');
    glow.className = "absolute w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none z-0";
    bannerSection.value.appendChild(glow);

    bannerSection.value.addEventListener('mousemove', (e) => {
        const rect = bannerSection.value.getBoundingClientRect();
        gsap.to(glow, {
            x: e.clientX - rect.left - 200,
            y: e.clientY - rect.top - 200,
            duration: 2,
            ease: "power2.out"
        });
    });

   },bannerSection.value)
})

onUnmounted(()=>{
   if (ctx) ctx.revert();
})
</script>

<style scoped>
.quote-word {
  /* Using font-display swap or a bold font like Inter/Space Grotesk */
  letter-spacing: -0.02em;
}
</style>