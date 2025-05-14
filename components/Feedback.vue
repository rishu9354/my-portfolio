<template>
         <!-- Testimonial section -->

         <section id="testimonial" class="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-20 overflow-hidden" style="background-image: url('/images/test-1.jpg');">
            <!-- dark overlay  -->
            <div class="absolute inset-0 bg-zinc/50 backdrop-blur-sm"></div>
            
            <!-- swiper builder -->
            <div class="relative z-20 w-full max-w-5xl px-6 max-auto text-center" ref="testimonialSection">
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-10">What Our Customers Say</h2>  
              <ClientOnly>

                    <Swiper
                    ref="containerRef"
                    :modules="[Pagination,Autoplay]" 
                    :slides-per-view="1"
                    :loop="true"
                    :autoplay="{delay:4000}" 
                    :pagination="{clickable:true}" 
                    class="mySwiper max-w-3xl mx-auto">
                    <SwiperSlide v-for="(items, index) in testimonials" :key="index">
                        <div class="bg-zinc/80 backdrop-blur-md rounded-tl-xl rounded-br-xl p-8 text-center shadow-xl animate-fade-in-scale">
                            <p class="text-white text-xl italic mb-4 md:text-xl">"{{ items.feedback }}"</p>
                            <h3 class="text-white text-2xl font-bold">{{ items.name }}</h3>
                            <span class="text-white/80 text-sm italic md:text-lg">{{ items.position }}</span>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </ClientOnly>
            </div>
         </section>
</template>

<script setup>
// import { getFirestore,collection,getDocs, doc } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.css'; // Import Swiper styles
// const db = getFirestore();
const testimonialSection = ref();

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

// onMounted(async ()=>{
//     const query = await getDocs(collection(db,"testimonials"));
//     testimonials.value = query.docs.map(doc=>doc.data());
// })

</script>