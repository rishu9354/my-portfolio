<template>
     <section ref="expSection" id="experince" class="py-32 px-6 bg-[#0a0a0a] text-white overflow-hidden">
          <div class="max-w-6xl mx-auto">
               <div class="mb-24">
                    <h2 ref="title" class="text-5xl md:text-8xl font-black uppercase tracking-tighter opacity-20">
                         history</h2>
                    <div class="w-20 h-1 bg-violet-600 mt-4"></div>

               </div>

               <div class="relative">
                    <div
                         class="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2 overflow-hidden">
                         <div ref="progressLine" class="w-full h-full bg-violet-600 origin-top scale-y-0"></div>
                    </div>

                    <div class="exp-item relative mb-32 flex flex-col md:flex-row justify-between items-center w-full"
                         :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''" v-for="(item, index) in experience"
                         :key="index">

                         <div
                              class="absolute left-0 md:left-1/2 w-4 h-4 bg-violet-600 rounded-full -translate-x-1/2 z-10 border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                         </div>

                         <div class="md:w-[45%] w-full pl-10 md:pl-0">
                              <div
                                   class="exp-content p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-violet-500/50 transition-colors duration-500">
                                   <time class="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2 block">
                                        {{ item.period }}
                                   </time>
                                   <h3 class="text-2xl md:text-3xl font-bold mb-1">{{ item.role }}</h3>
                                   <p class="text-zinc-400 font-medium mb-4 italic">{{ item.company }}</p>
                                   <p class="text-zinc-500 leading-relaxed text-lg">
                                        {{ item.desc }}
                                   </p>
                              </div>
                         </div>
                         <div class="hidden md:block md:w-[45%]"></div>
                    </div>
               </div>
          </div>
     </section>
</template>

<script setup>
// import { Motion } from "@vueuse/motion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const experience = [
     {
          period: 'Jan 2024 – Present',
          role: 'Java Full Stack Developer',
          company: 'CodeCraft Agency',
          desc: 'Orchestrating robust Java ecosystems with Spring Boot while crafting high-fidelity Vue.js/Nuxt frontends. Focused on scalable microservices and seamless UX.'
     },
     {
          period: 'Jan 2023 – Jun 2023',
          role: 'Freelance Web Developer',
          company: 'Self-employed',
          desc: 'Delivered high-performance digital solutions for diverse clients, specializing in SEO-optimized portfolio architectures and real-time dashboard systems.'
     }
];

const expSection = ref(null);
const progressLine = ref(null);
const title = ref(null);

let ctx;
onMounted(()=>{
     ctx = gsap.context(()=>{
          // title fade
          gsap.from(title.value,{
               scrollTrigger:{
                    trigger:title.value,
                    start:"top 90%",
                    toggleActions: "play none none reverse"

               },
               x:-100,
               opacity:0,
               duration:1.5,
               ease:"expo.out"
          });
          // 2. Timeline Line Growth
    gsap.to(progressLine.value, {
      scrollTrigger: {
        trigger: ".relative",
        start: "top 70%",
        end: "bottom 80%",
        scrub: 1.5,
      },
      scaleY: 1,
      ease: "none"
    });

    // 3. Experience Cards Reveal
    const items = gsap.utils.toArray('.exp-item');
    items.forEach((item, i) => {
      const content = item.querySelector('.exp-content');
      const isEven = i % 2 === 0;

      gsap.from(content, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        x: isEven ? 100 : -100,
        opacity: 0,
        skewX: isEven ? -5 : 5,
        duration: 1.2,
        ease: "power4.out"
      });
    });
     },expSection.value)
})
</script>

<style scoped>
.exp-content {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
</style>