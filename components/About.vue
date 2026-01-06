<template>
    <!-- about section -->
    <section id="about" ref="aboutSection"
        class="cursor-default relative flex items-center justify-center min-h-screen bg-[#0a0a0a] py-24 overflow-hidden">

        <div class="absolute inset-0 z-0 overflow-hidden">
            <img ref="aboutImg" src="/images/rishu-bg3.png" alt="Rishabh Sharma"
                class="h-full w-full object-cover grayscale contrast-125 opacity-40 md:opacity-60 pointer-events-none">
            <div class="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        </div>

        <div class="relative z-10 max-w-7xl w-full px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
                <div class="overflow-hidden">
                    <h1 ref="aboutTitle"
                        class="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] uppercase">
                        ABOUT<br />
                        <span class="text-violet-600 italic">ME.</span>
                    </h1>
                </div>
                <div class="w-32 h-1 bg-violet-600 origin-left scale-x-0" ref="line"></div>

                <div ref="bioContent" class="space-y-6 opacity-0 translate-y-10">
                    <h2 class="text-2xl md:text-4xl text-zinc-300 font-medium tracking-tight">
                        Crafting digital excellence <br /> with <span class="text-white">Java & Vue.js</span>
                    </h2>

                    <p class="text-zinc-500 text-lg md:text-xl max-w-xl leading-relaxed">
                        I am a Java Full Stack developer who believes that <span class="text-zinc-200">code is an art
                            form</span>.
                        With over a year of experience, I specialize in building high-performance
                        Spring Boot backends and pixel-perfect NuxtJS interfaces.
                    </p>

                    <!-- skills -->

                    <div class="flex flex-wrap gap-3 pt-6">
                        <span
                            v-for="skill in ['Java', 'Spring Boot', 'Vue.js', 'Nuxt.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Redis']"
                            :key="skill"
                            class="px-4 py-2 border border-zinc-800 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-400 hover:border-violet-600 hover:text-white transition-colors duration-300">
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block perspective-1000">
                <div ref="bioCard" @mousemove="handleTilt" @mouseleave="resetTilt"
                    class="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">

                    <div
                        class="absolute -top-10 -left-10 w-40 h-40 bg-violet-600/20 blur-[80px] group-hover:bg-violet-600/40 transition-all duration-700">
                    </div>

                    <div class="relative z-10">
                        <div class="text-violet-500 font-mono text-sm mb-4 tracking-[0.3em] uppercase">The Philosophy
                        </div>
                        <p class="text-zinc-300 text-xl italic leading-relaxed">
                            "Design is not just what it looks like and feels like. Design is how it works."
                        </p>
                        <div class="mt-8 flex items-center gap-4">
                            <div class="w-10 h-[1px] bg-zinc-700"></div>
                            <span class="text-zinc-500 uppercase text-xs tracking-widest">Inspiration: Steve Jobs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const aboutSection = ref(null);
const aboutTitle = ref(null);
const line = ref(null);
const bioCard = ref(null);
const bioContent = ref(null);
const aboutImg = ref(null);
let ctx:gsap.Context;
onMounted(()=>{
    ctx = gsap.context(()=>{
        // 1. Title Slide Up
        gsap.from(aboutTitle.value, {
            scrollTrigger: {
                trigger: aboutTitle.value,
                start: "top 90%",
                 toggleActions: "play none none reverse",
                
            },
            y: 200,
            rotate: 5,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"
        });
// 2. Line Animation
        gsap.to(line.value, {
            scrollTrigger: {
                trigger: line.value,
                start: "top 90%",
                toggleActions: "play none none reverse",

            },
            scaleX: 1,
            duration: 1.2,
            ease: "expo.inOut"
        });
        // 3. Content Fade In
        gsap.to(bioContent.value, {
            scrollTrigger: {
                trigger: bioContent.value,
                start: "top 85%",
                toggleActions: "play none none reverse",

            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out"
        });

       // 4. Parallax Photo (The Steve Jobs Look)
        gsap.fromTo(aboutImg.value, 
            { y: 100, opacity: 0 },
            {
                y: -50,
                opacity: 0.6,
                scrollTrigger: {
                    trigger: aboutSection.value,
                 toggleActions: "play none none reverse",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            }
        );
        // 5. Card Entrance
        gsap.from(bioCard.value, {
            scrollTrigger: {
                trigger: bioCard.value,
                start: "top 80%",
                 toggleActions: "play none none reverse",

            },
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out"
        });
    },aboutSection.value);
});
onUnmounted(() => {
    if (ctx) ctx.revert();
});
// 3D Tilt Logic
const handleTilt = (e: MouseEvent) => {
    const card = bioCard.value;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true
    });
};

const resetTilt = () => {
    gsap.to(bioCard.value, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)"
    });
};

</script> 

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}

/* Texture effect for the background */
#about::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("https://grainy-gradients.vercel.app/noise.svg");
    opacity: 0.05;
    pointer-events: none;
    z-index: 1;
}
</style>