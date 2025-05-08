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
                    <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
                        <div class="bg-zinc/80 backdrop-blur-md rounded-tl-xl rounded-br-xl p-8 text-center shadow-xl animate-fade-in-scale">
                            <p class="text-white text-xl italic mb-4 md:text-xl">"{{ testimonial.feedback }}"</p>
                            <h3 class="text-white text-2xl font-bold">{{ testimonial.name }}</h3>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </ClientOnly>
            </div>
         </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const testimonialSection = ref();

const testimonials =[
    {
        name:"Rishabh",
        feedback:"Nourish & Bloom has transformed my daily skincare routine."
    },
    {
        name:"Rohan",
        feedback:"Absolutely love the natural ingredients! My skin feels so refreshed and healthy."
    },
    {
        name:"Simran Kuar",
        feedback:"The fragrance, the feel, everything about it is pure nature in a bottle!"
    }
]
</script>