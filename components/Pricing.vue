<template>
     <!-- price section -->
        <section id="pricing" ref="pricingSection" class="relative py-32 px-6 bg-[#0a0a0a] overflow-hidden">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-violet-900/5 blur-[120px] pointer-events-none"></div>
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-24 opacity-0 pricing-header">
                <span class="text-violet-500 font-mono text-sm uppercase tracking-[0.3em]">Investment</span>
                <h2 class="text-4xl md:text-7xl font-bold mt-4 mb-6 tracking-tighter text-white">
                    Transparent <span class="text-violet-500 italic">Pricing</span>
                </h2>
                <p class="text-zinc-500 max-w-xl mx-auto text-lg font-light">
                    Professional solutions tailored to your business needs.
                </p>
            </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="pricing-card opacity-0 group p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800 hover:border-violet-500/50 transition-all duration-500 flex flex-col h-full relative"
                        v-for="(plan, index) in pricing" :key="index">
                        <div v-if="plan.popular"
                            class="absolute top-0 right-0 bg-violet-600 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-bl-xl z-20">
                            Most Popular
                        </div>

                        <div class="mb-8">
                            <h3 class="text-xl font-medium text-zinc-400 mb-2">{{ plan.name }}</h3>
                            <div class="flex items-baseline gap-1">
                                <span class="text-3xl md:text-4xl font-bold tracking-tighter text-white">₹{{ plan.price }}</span>
                                <span class="text-zinc-500 text-[10px] uppercase">/ project</span>
                            </div>
                        </div>

                        <ul class="space-y-4 mb-12 flex-grow">
                            <li class="flex items-center gap-3 text-zinc-400 text-sm" v-for="feat in plan.features"
                                :key="feat">
                                <Icon icon="mdi:check-circle" class="text-violet-500 mt-1 shrink-0" width="16" />
                                <span class="leading-tight group-hover:text-zinc-200 transition-colors">{{ feat }}</span>
                            </li>
                        </ul>

                        <NuxtLink :to="plan.link"
                            class="mt-auto block w-full py-4 text-center rounded-full bg-white text-black font-bold hover:bg-violet-600 hover:text-white transition-all duration-500 transform group-hover:scale-[1.02]">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricing = [
    { name: 'Starter Kit', price: '15,000', features: ['Custom UI Design', '5-7 Page Nuxt Site', 'SEO Optimization', 'Responsive'], popular: false, link: '/contact' },
    { name: 'Professional', price: '40,000', features: ['Full Stack Dev', 'Java Backend', 'Node.js Backend', 'Admin Dashboard'], popular: true, link: '/contact' },
    { name: 'E-Commerce', price: '60,000 +', features: ['Cart / Order Management', 'Payment Gateway', 'JWT Auth', 'Redis Caching'], popular: false, link: '/contact' },
    { name: 'Enterprise', price: '80,000 +', features: ['Custom SaaS App', 'Role-Based Access', 'Complex Logic', 'Maintenance'], popular: false, link: '/contact' },
];
const pricingSection = ref(null);
let ctx;

onMounted(()=>{
    ctx = gsap.context(()=>{
        // animate header
        gsap.to('.pricing-header',{
            scrollTrigger:{
                trigger:pricingSection.value,
                start:"top 80%",
                toggleActions: "play none none reverse"

            },
            opacity:1,
            y:-30,
            duration:1.2,
            ease:"power4.out"
        });
        // 2. Animate Cards with a "Pop-up" effect
      gsap.fromTo(".pricing-card", 
            { 
                opacity: 0, 
                y: 100 
            }, // START STATE
            { 
                opacity: 1, 
                y: 0, 
                stagger: 0.15, 
                duration: 1.2, 
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#pricing",
                    start: "top 70%", // Triggers when the section is 70% from the top
                toggleActions: "play none none reverse"

                },
                // clearProps: "opacity,transform" // Only clear what's needed for hover
            }
        );
    },pricingSection.value)
})

onUnmounted(() => {
    if (ctx) ctx.revert();
});
</script>

<style scoped>
/* High-end agencies often use a subtle border glow */
.pricing-card:hover {
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.15);
}
</style>