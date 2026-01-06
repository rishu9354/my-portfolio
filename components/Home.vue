<template>
    <!-- <section id="home" ref="homeSection" class="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-16 md:px-20 bg-amber-100 overflow-hidden">
        left content
         animate-fade-left
        <div class="md:w-1/2 space-y-6 md:space-y-8">
            <h1 ref="title" class="text-4xl md:text-6xl lg:text-7xl font-semibold opacity-0 translate-y-10">
                Rishabh Sharma
            </h1>
            <h1 ref="subtitle" class="text-3xl md:text-5xl lg:text-6xl text-violet-700 font-bold opacity-0 translate-y-10">
                Java Developer
            </h1>
            <p ref="description" class="text-lg md:text-xl text-gray-700 opacity-0 translate-y-10">
                Java Full Stack Developer | Vue.js | Nuxt.js | React.js | Spring Boot | Node.JS | SEO & Hosting
                Knowledge
            </p>

            <div ref="buttonWrap" class="opacity-0 translate-y-10">
                <NuxtLink to="/Contact"
                class="inline-block mt-4 px-8 py-4 bg-zinc-800 text-white rounded-full hover:bg-zinc-950 transition-colors duration-300 shadow-lg"
                @mousemove="magneticButton"
                @mouseleave="resetButton"
                >
                Hire Me
            </NuxtLink>
        </div>

        </div>
        hero section
        <div ref="imageContainer" class="md:w-1/2 flex justify-center relative mt-12 md:mt-0 opacity-0 scale-90">
            <div class="relative">
                <div class="absolute -inset-4 bg-violet-200 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <img src="/images/hero.jpeg" alt="hero-img" class="hero-image w-[300px] md:w-[400px] h-auto object-cover rounded-2xl shadow-2xl">
            </div>
        </div>
    </section> -->

<section ref="homeSection" id="home" class="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a] px-6 md:px-20 py-16 overflow-hidden">
        
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <div class="relative z-10 w-full flex flex-col items-start">
            <div ref="tagline" class="overflow-hidden mb-6 mt-2">
                <p class="text-violet-500 font-mono uppercase tracking-[0.3em] text-sm md:text-base">
                    Based in India // Available Worldwide
                </p>
            </div>

            <div class="main-heading">
                <h1 ref="line1" class="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
                    Rishabh
                </h1>
                <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                    <h1 ref="line2" class="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-zinc-800 outline-text">
                        Sharma
                    </h1>
                    <div ref="heroImg" class="hero-image-wrapper relative w-50 h-70 md:w-64 md:h-65 rounded-full overflow-hidden border border-zinc-700 mt-4 md:mt-0">
                        <img src="/images/hero2.png" alt="Work" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
                    </div>
                </div>
            </div>

            <div class="mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-end w-full gap-8">
                <div ref="desc" class="max-w-md">
                    <p class="text-zinc-400 text-lg md:text-xl leading-relaxed">
                        Crafting high-performance <span class="text-white font-medium">Java ecosystems</span> 
                        and immersive <span class="text-white font-medium">Vue.js interfaces</span> that 
                        drive business growth.
                    </p>
                </div>
                
                <div ref="cta" class="relative group">
                    <NuxtLink to="/Contact" class="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-zinc-700 text-white hover:bg-violet-600 hover:border-violet-600 transition-all duration-500">
                        <span class="text-sm font-bold uppercase tracking-widest group-hover:scale-110 transition-transform">Hire Me</span>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <span class="text-[10px] uppercase tracking-widest text-white">Scroll</span>
            <div class="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
    </section>
</template>

<script setup>
import gsap from "gsap";

const homeSection = ref(null);
const tagline = ref(null);
const line1 = ref(null);
const line2 = ref(null);
const heroImg = ref(null);
const desc = ref(null);
const cta = ref(null);

let ctx;

onMounted(()=>{
    ctx = gsap.context(()=>{
        const tl = gsap.timeline({defaults:{ease:"expo.out"}});

       // 1. Entrance Sequence
        tl.from(tagline.value, { yPercent: 100, duration: 1 })
          .from([line1.value, line2.value], { 
                y: 200, 
                opacity: 0, 
                skewY: 10, 
                stagger: 0.1, 
                duration: 1.5 
          }, "-=0.8")
          .from(heroImg.value, { 
                width: 0, 
                opacity: 0, 
                duration: 1.2 
          }, "-=1")
          .from(desc.value, { 
                y: 30, 
                opacity: 0, 
                duration: 1 
          }, "-=0.8")
          .from(cta.value, { 
                scale: 0, 
                opacity: 0, 
                duration: 1 
          }, "-=0.8");

        // 2. Parallax Mouse Move (Subtle depth)
        homeSection.value.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 20;
            const yPos = (clientY / window.innerHeight - 0.5) * 20;

            gsap.to(heroImg.value, { x: xPos, y: yPos, duration: 1 });
            gsap.to(line2.value, { x: -xPos, duration: 1 });
        });

        }, homeSection.value)
});

onUnmounted(()=>{
    if(ctx) ctx.revert();
})

// // magnetic logic
// const magneticButton = (e)=>{
//     const btn = e.currentTarget;
//     const rect = btn.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;

//     gsap.to(btn, {
//         x: x * 0.3,
//         y: y * 0.3,
//         duration: 0.3,
//         ease: "power2.out"
//     });
// };

// const resetButton = (e) => {
//     gsap.to(e.currentTarget, {
//         x: 0,
//         y: 0,
//         duration: 0.5,
//         ease: "elastic.out(1, 0.3)"
//     });
// };

</script>

<style scoped>
.outline-text {
    -webkit-text-stroke: 1px #3f3f46; /* zinc-700 */
    color: transparent;
    transition: -webkit-text-stroke 0.5s ease;
}

.outline-text:hover {
    -webkit-text-stroke: 1px #8b5cf6; /* violet-500 */
}

/* Custom font feeling */
h1 {
    font-family: 'Inter', sans-serif;
}
</style>