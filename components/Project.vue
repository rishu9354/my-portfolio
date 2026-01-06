<template>
    <!-- <h1>project section</h1> -->

    <div ref="mainContainer" class="bg-[#0a0a0a] text-white">
        <section id="projects" ref="projectSection" class="relative h-screen flex items-center overflow-hidden">
            <div ref="bigText"
                class="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.03] pointer-events-none">
                <h2 class="text-[30vw] font-black uppercase">Selected work Selected work</h2>
            </div>

            <div ref="scrollContainer" class="flex items-center px-10 md:px-20 gap-10 md:gap-20 h-[70vh]">
                <div class="min-w-[300px] md:min-w-[450px] flex flex-col justify-center">
                    <span class=" text-violet-500 font-mono tracking-widest uppercase mb-4">Portfolio</span>
                    <h2 class="text-5xl md:text-7xl font-bold leading-tight uppercase tracking-tighter">
                        Digital <br> Experiences
                    </h2>
                    <p class="text-zinc-500 mt-6 max-w-xs">A collection of Java-powered backends and Vue-driven
                        frontends.</p>
                </div>

                <!-- projects -->
                <div class="project-card min-w-[350px] md:min-w-[600px] h-full group relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800"
                    v-for="(project, index) in projects" :key="index">
                    <img :src="project.image"
                        class="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />

                    <div
                        class="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                        <span class="text-violet-400 font-mono text-sm mb-2 ">{{ project.category }}</span>
                        <h3 class="text-3xl md:text-4xl font-bold uppercase">{{ project.title }}</h3>
                        <div class="h-1 w-0 bg-violet-600 group-hover:w-20 transition-all duration-500 mt-4"></div>
                    </div>
                </div>
            </div>
        </section>
       
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mainContainer = ref(null);
const scrollContainer = ref(null);
const projectSection = ref(null);
const bigText = ref(null);

const projects =[
    {title: 'Stream Scape', category: 'Nuxt3 / Node.js', image:'/images/stream-scape.png'},
    {title: 'Brandscaremedia Pvt Ltd.', category: 'React.js / Tailwind CSS / Node.js / PHP', image:''},
    {title: 'AI ChatBot', category: 'Nuxt3 / Node.js / Google Gemini API', image:'/images/ai-chatbot.png'},
    {title: 'Real-Time Chat Application', category: 'Java / Spring Boot / Web Socket', image:'/images/chat-app.png'},

];
const pricing = [
    { name: 'Starter Kit', price: '15,000', features: ['Custom UI Design', '5-7 Page Nuxt Site', 'SEO Optimization', 'Responsive'], popular: false, link: '/contact' },
    { name: 'Professional', price: '40,000', features: ['Full Stack Dev', 'Java Backend', 'Node.js Backend', 'Admin Dashboard'], popular: true, link: '/contact' },
    { name: 'E-Commerce', price: '60,000', features: ['Cart / Order Management', 'Payment Gateway', 'JWT Auth', 'Redis Caching'], popular: false, link: '/contact' },
    { name: 'Enterprise', price: '80,000', features: ['Custom SaaS App', 'Role-Based Access', 'Complex Logic', 'Maintenance'], popular: false, link: '/contact' },
];

let ctx;

onMounted(()=>{
    ctx= gsap.context(()=>{
        // horizontal scroll animation
        const scrollWidth = scrollContainer.value.offsetWidth;
        const amtToScroll= scrollWidth - window.innerWidth;
        
        gsap.to(scrollContainer.value,{
            x:-amtToScroll,
            ease:"none",
            scrollTrigger:{
                trigger:projectSection.value,
                start:"top top",
                end:`+=${amtToScroll}`,
                pin:true,
                scrub:1,
            }
        });
        // bg text parallax
        gsap.to(bigText.value,{
            xPercent:-30,
            scrollTrigger:{
                trigger:projectSection.value,
                start:"top bottom",
                end:"bottom top",
                scrub:true,
            }
        });
        // 3. Pricing Cards Stagger
    gsap.from(".pricing-card", {
      scrollTrigger: {
        trigger: "#pricing",
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "expo.out"
    });

    },mainContainer.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>