<template>
         <!-- Testimonial section -->

         <section id="testimonial" ref="testimonialSection" class="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] py-24 overflow-hidden">
            
            <div class="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.03] select-none">
                <div class="marquee-text text-[20vw] font-black uppercase leading-none whitespace-nowrap">
                    Testimonials • Feedback • Reviews •
                </div>
            </div>

            <div class="absolute inset-0 z-0">
                <img src="/images/test-1.jpg" alt="background" class="w-full h-full object-cover opacity-20 grayscale">
                <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
            </div>

            <div class="relative z-20 w-full max-w-6xl px-6 mx-auto">
                <div class="text-center mb-16 overflow-hidden">
                    <h2 class="section-title text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase">
          Client <span class="text-violet-500 italic">Stories</span>
        </h2>
        <div class="h-[1px] w-24 bg-violet-600 mx-auto mt-4"></div>
                </div>
               
                <!-- swiper builder -->
                 <ClientOnly>
                    <div ref="swiperWrapper" class="swiper-reveal-wrapper opacity-0">
                    <Swiper
                    :modules="[Autoplay, Pagination, EffectFade]" 
          :slides-per-view="1"
          :loop="true"
          :effect="'fade'"
          :fade-effect="{ crossFade: true }"
          :autoplay="{ delay: 5000, disableOnInteraction: false }" 
          :pagination="{ clickable: true, dynamicBullets: true }" 
          class="testimonial-swiper max-w-4xl mx-auto cursor-grab active:cursor-grabbing">

                    <SwiperSlide v-for="(items, index) in testimonials" :key="index">
                        <div class="relative p-10 md:p-16 text-center">
                            <Icon icon="ri:double-quotes-l" class="absolute top-0 left-0 text-violet-600/20 text-8xl md:text-9xl -translate-y-10" />

                            <div class="relative z-10">
                            <p class="text-white text-2xl md:text-4xl font-light leading-snug italic mb-10 -tracking-tight">
                                "{{ items.feedback }}"
                            </p>
                            <h3 class="text-white text-2xl md:text-3xl font-bold uppercase tracking-widest">
                                {{ items.name }}
                            </h3>
                            <span class="text-violet-400 text-sm font-mono mt-2 tracking-widest uppercase md:text-base">{{ items.position }}</span>
                        </div>

                        </div>

                        
                    </SwiperSlide>
                    </Swiper>
                    </div>
                </ClientOnly>

            </div>
         </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Icon } from '@iconify/vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

gsap.registerPlugin(ScrollTrigger);
const testimonialSection = ref(null);
const swiperWrapper = ref(null);
const testimonials =ref([
    {
        name:"Anjali Mehra",
        position:"Digital Marketer",
        feedback:"Rishabh is a gem! He built my landing page exactly how I imagined it. Super responsive and professional."
    },
    {
        name:"Rajat Verma",
        position:"Startup Founder, EdTech",
        feedback:"We hired Rishabh for a frontend overhaul. His Vue.js skills are top-notch. Delivered fast and beyond expectations."
    },
    {
        name:"Simran Kuar",
        position:"UI/UX Designer",
        feedback:"Loved collaborating with Rishabh. He converted my Figma designs to code pixel-perfectly. Highly recommended!"
    },
        {
        name:"Aman Sheikh",
        position:"Freelance Photographer",
        feedback:"Rishabh developed my portfolio site beautifully. Clean UI, smooth performance — couldn’t ask for more."
    },
        {
        name:"Karan Bansal",
        position:"Tech Lead, SaaS Company",
        feedback:"We trusted Rishabh with a critical feature and he nailed it. Reliable, skilled, and easy to communicate with."
    },
]);
let ctx;
onMounted(async () => {
  // Wait for Nuxt to finish hydration and Swiper to mount
  await nextTick();

  ctx = gsap.context(() => {
    // 1. Title Entrance
    gsap.from(".section-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: testimonialSection.value,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // 2. FIXED: Marquee Background Animation
    // We use fromTo to ensure it takes control of the element
    gsap.fromTo(".marquee-text", 
      { xPercent: 0 }, 
      {
        xPercent: -30,
        scrollTrigger: {
          trigger: testimonialSection.value,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smoothly tied to scroll
        }
      }
    );

    // 3. FIXED: Parallax/Entrance for Swiper
    // Using swiperWrapper ref to avoid issues with ClientOnly
    gsap.fromTo(swiperWrapper.value, 
      { scale: 0.8, opacity: 0, y: 50 }, 
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: testimonialSection.value,
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, testimonialSection.value);
});
onUnmounted(() => {
    if (ctx) ctx.revert();
});
</script>

<style>
/* Custom Pagination Styling to match premium look */
.testimonial-swiper .swiper-pagination-bullet {
    background: #52525b !important;
    opacity: 1;
    width: 12px;
    height: 12px;
    transition: all 0.3s ease;
}

.testimonial-swiper .swiper-pagination-bullet-active {
    background: #8b5cf6 !important; /* violet-500 */
    width: 30px;
    border-radius: 6px;
}

.testimonial-swiper {
    padding-bottom: 60px !important;
}
</style>