<template>
    <!-- skills -->
    <section ref="scrollingSection" id="skills" class="relative  overflow-hidden min-h-screen">
        <div class="container mx-auto px-6 md:px-16 h-full flex items-center">

            <div class="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
                <div class="lg:w-2/5 w-full">
                    <h2 class="text-5xl md:text-7xl font-bold font-serif leading-tight text-gray-100">
                        Work with an <br><span class="text-violet-700 italic">Expert.</span>
                    </h2>

                    <p class="text-zinc-500 mt-6 font-mono max-w-xs">
                        Elevating digital experiences through full-stack precision.
                    </p>

                    <div class="mt-8 flex items-center gap-4">
                        <div class="h-[1px] w-12 bg-zinc-400"></div>
                        <p class="text-zinc-500 font-mono uppercase tracking-widest text-sm">Skills & Services</p>
                    </div>
                </div>
                <!-- services  -->
                <div class="lg:w-1/2 w-full relative h-[450px] flex items-center justify-center">
                    <div v-for="(card, index) in cards" :key="index" class="skill-card absolute inset-0 bg-white border border-zinc-100 p-10 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] flex flex-col justify-center transition-all duration-300"
                        :style="{ zIndex: cards.length - index }">


                        <div class="flex items-center justify-between mb-8">
                            <span class="text-6xl">{{ card.icon }}</span>
                            <span class="text-zinc-200 font-bold text-6xl">0{{ index + 1 }}</span>
                        </div>

                        <h3 class="text-3xl font-bold text-zinc-800 mb-4">{{ card.title }}</h3>

                        <p class="text-zinc-500 font-sans text-lg leading-relaxed border-l-2 border-violet-500 pl-6">
                            Professional implementation of {{ card.title }} solutions. 
                            Focused on high-performance architecture, clean code, and 
                            scalable system design for modern web applications.
                        </p>
                        <div class="mt-8 flex gap-2">
                            <div v-for="i in cards.length" :key="i" 
                                 :class="['h-1 w-8 rounded-full transition-colors duration-500', i-1 === index ? 'bg-violet-600' : 'bg-zinc-100']">
                            </div>
                        </div>
                    </div>

                    <div class="skill-card opacity-0 pt-10 flex justify-center lg:justify-start">
                        <NuxtLink to="/contact" class="flex items-center rounded-full bg-black text-white py-4 px-10 text-lg hover:bg-violet-700 transition-all duration-500 group">
                            Start a Project
                            <Icon icon="mdi:arrow-top-right" width="24" height="24" class="ml-3 group-hover:rotate-45 transition-transform" />
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </div>    
    </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollingSection = ref(null);
// const titleContainer = ref(null);
// const progressBar = ref(null);

 const cards=[
        {icon:'🖥️',title:'Frontend Developer'},
        {icon:'💾',title:'Backend Developer'},
        {icon:'🗄️',title:'Database'},
        {icon:'🔁',title:'Redis'},
        {icon:'🛡️',title:'SEO & Security'},
        

    ];

let ctx;

onMounted(()=>{
    ctx = gsap.context(()=>{
        const cardElement = gsap.utils.toArray('.skill-card');
        // timeline for the scroll -based reveal
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:scrollingSection.value,
                start:"top top",
                end:`+=${cards.length * 1000}`,
                pin: true,
                scrub:1,
                anticipatePin:1,
            }
        });
        // loop through cards to create the overlapping animation
        cardElement.forEach((card,i)=>{
         if(i !== cardElement.length -1){
               tl.to(card,{
                yPercent:-120,
                rotation:-10,
                opacity:0,
                scale:0.9,
                duration:1,

            },`+=0.5`);
         }
        });

        // 3. Reveal Cards one by one as we scroll
        // gsap.utils.toArray('.skill-card').forEach((card, i) => {
        //     tl.to(card, {
        //         opacity: 1,
        //         y: 0,
        //         duration: 1,
        //         ease: "power2.out"
        //     }, i * 0.5); // Staggering them inside the scrub timeline
        // });
    },scrollingSection.value)
})

onUnmounted(() => {
    if (ctx) ctx.revert();
});
</script>

<style scoped>
/* Optional: Glass look for the section background */
#skills {
    /* background: radial-gradient(circle at 50% 50%, #fdfcfb 0%, #e2d1c322 100%); */
    background-color: black;
}

/* Ensure the card container has perspective for the tilt effect */
.relative {
    perspective: 1500px;
}
</style>