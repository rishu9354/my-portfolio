<template>  
    <div id="connect" ref="contactWrapper" class="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 text-white md:p-20 overflow-hidden relative ">
        <div class="absolute top-10 left-10 opacity-[0.02] pointer-events-none select-none">
            <h1 class="text-[20vw] font-black leading-none">HELLO</h1>
        </div>

        <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
             <div class="flex flex-col justify-center space-y-12">
                 <div class="overflow-hidden">
                    <h2 class="contact-title text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">
                        Let's build <br/> 
                        <span class="text-violet-500 italic">together.</span>
                    </h2>
                    <!-- <img src="/images/Contact-us.png" alt="contact-us-pic" class="w-96 h-auto object-contain"> -->
                 </div>

                 <div class="space-y-6 contact-info opacity-0">
                    <p class="text-zinc-500 text-lg max-w-md">
                        Have a project in mind? Looking for a full-stack developer to bring your ideas to life? Drop a message.
                    </p>
                    <div class="flex flex-col space-y-2">
                        <span class="text-xs font-mono uppercase tracking-[0.3em] text-violet-500">Email Me</span>
                        <a href="mailto:rs0530698@gmail.com" class="text-2xl hover:text-violet-400 transition-colors">rs0530698@gmail.com</a>
                    </div>
                 </div>
             </div>

            <div class="bg-zinc-900/40 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 shadow-2xl contact-form opacity-0">
                <!-- <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-8">Contact-us</h2> -->

               
                <form @submit.prevent="onSubmit" class="space-y-8">
                    <div class="relative group">
                       <input type="text" v-model="form.name" required
                            class="peer w-full bg-transparent border-b border-zinc-700 py-3 focus:outline-none focus:border-violet-500 transition-colors placeholder-transparent"
                            placeholder="Name">
                        <label class="absolute left-0 top-3 text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-violet-500 uppercase tracking-widest font-mono">Name</label>

                    </div>
                    <div class="relative group">   
                        <input type="email" v-model="form.email" required
                            class="peer w-full bg-transparent border-b border-zinc-700 py-3 focus:outline-none focus:border-violet-500 transition-colors placeholder-transparent"
                            placeholder="Email">
                        <label class="absolute left-0 top-3 text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-violet-500 uppercase tracking-widest font-mono">Email</label>
                    </div>

                    <div class="relative group">   
                        <input type="tel" v-model="form.phone" required
                            class="peer w-full bg-transparent border-b border-zinc-700 py-3 focus:outline-none focus:border-violet-500 transition-colors placeholder-transparent"
                            placeholder="Phone no.">
                        <label class="absolute left-0 top-3 text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-violet-500 uppercase tracking-widest font-mono">Phone No.</label>
                    </div>

                    <div class="relative group">   
                        <textarea v-model="form.message" required rows="3"
                            class="peer w-full bg-transparent border-b border-zinc-700 py-3 focus:outline-none focus:border-violet-500 transition-colors placeholder-transparent resize-none"
                            placeholder="Message"></textarea>
                        <label class="absolute left-0 top-3 text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-violet-500 uppercase tracking-widest font-mono">Message</label>
                    </div>

                    <div class="flex justify-end pt-4">
                        <button ref="magneticBtn"
                            type="submit"
                            class="magnetic-btn group relative px-12 py-5 bg-violet-600 rounded-full overflow-hidden transition-transform duration-200">
                        <span class="relative z-10 text-white font-bold uppercase tracking-widest flex items-center gap-3">
                                <span v-if="isLoading">Sending...</span>
                                <span v-else>Send Message</span>
                                <Icon icon="mdi:arrow-right" class="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <div class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 mix-blend-difference"></div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Icon} from '@iconify/vue';
import gsap from 'gsap';    
import axios from 'axios';

const contactWrapper = ref(null);
const magneticBtn = ref(null);
const isLoading = ref(false);


const form = ref({
    name:"",
    email:"",
    phone:"",
    message:""
})

// magnetic btn logic
const initMagneticButton = ()=>{
    const btn = magneticBtn.value;
    if(!btn) return;
    window.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 100) {
            gsap.to(btn, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.4,
                ease: "power2.out"
            });
        } else {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
        }
    });
} 

onMounted(()=>{
    initMagneticButton(); // call
    // entrance animate
    const tl = gsap.timeline({defaults:{ease:"power4.out"}},contactWrapper.value);
    tl.from(".contact-title",{
        y:150,
        duration:1.5,
        stagger:0.2,
    })
    .to(".contact-info",{opacity:1, y:-20, duration:1 },"-=1")
    .to(".contact-form",{opacity:1,x:0,duration:1.2},"-=1")
});


const onSubmit = async ()=>{
        isLoading.value = true;
        try {

            const res = await $fetch('/api/contact', {
                method:'POST',
                body:form.value,
            })
            // alert(res.data.message);
             form.value = { name: '', email: '', phone: '', message: '' };
        } catch (error) {
            alert('Something went wrong')
            console.error(error);
            
        } finally{
            isLoading.value = false;
        }


}

// import { collection,addDoc } from 'firebase/firestore';

// const { $db } = useNuxtApp();
// const form = reactive({
//     name:"",
//     email:"",
//     phone:"",
//     message:""
// })

// async function onSubmit() {
//     try {
//         await addDoc(collection($db,'contacts'),{
//             name:form.name,
//             email:form.email,
//             phone:form.phone,
//             message:form.message,
//             timestamp:new Date()
//         });
//         alert("Message sent");
//         form.name = form.email= form.phone = form.message ='';
//     } catch (error) {
//         console.error(error);
//         alert('Something went wrong');
//     } finally{
//         isLoading.value = false;
//     }

//     navigateTo("/");   
// }
</script>

<style scoped>
/* Fix for phone number spin buttons */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>