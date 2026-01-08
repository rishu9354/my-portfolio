<template>
    <div class="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 relative overflow-hidden">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full">
        </div>

        <div class="max-w-6xl mx-auto relative z-10">
            <NuxtLink to="/"
                class="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all mb-12 w-max">
                <Icon icon="ph:arrow-left-bold" class="group-hover:-translate-x-1 transition-transform" />
                <span class="font-mono text-xs uppercase tracking-widest">Back to Home</span>
            </NuxtLink>

            <div class="grid grid-cols-1 lg:grid-12 gap-16">

                <div class="lg:col-span-5 space-y-8">

                    <div ref="titleSection">
                        <span class="text-violet-500 font-mono text-sm tracking-[0.3em] uppercase">Ready to
                            Start?</span>
                        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter mt-4 uppercase">
                            {{ planName }} <span class="text-violet-500 italic block">Plan.</span>
                        </h1>
                    </div>

                    <div class="space-y-6 pt-10 border-t border-zinc-900">
                        <p class="text-zinc-400 text-lg leading-relaxed">
                            You've selected the <span class="text-white font-bold">{{ planName }}</span> package.
                            Fill out the details and I'll get back to you within 24 hours to schedule a kick-off call.
                        </p>

                        <ul class="space-y-4">
                            <li v-for="item in 4" :key="item" class="flex items-center gap-3 text-sm text-zinc-500">
                                <Icon icon="ph:check-circle-fill" class="text-violet-500" />
                                <span>PREMIUM QUALITY DELIVERY</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="lg:col-span-7">
                    <div ref="formCard"
                        class="bg-zinc-900/40 backdrop-blur-3xl border border-zinc-800 p-8 md:p-12 rounded-[3rem] shadow-2xl">
                        <form @submit.prevent="handleBooking" class="space-y-10">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div class="relative group">
                                    <input v-model="form.name" type="text" required
                                        class="peer w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-violet-500 transition-all placeholder-transparent">
                                    <label
                                        class="absolute left-0 top-3 text-zinc-600 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-violet-500 uppercase tracking-widest font-mono">Your
                                        Name</label>
                                </div>

                                <div class="relative group">
                                    <input v-model="form.email" type="email" required
                                        class="peer w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-violet-500 transition-all placeholder-transparent">
                                    <label
                                        class="absolute left-0 top-3 text-zinc-600 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-violet-500 uppercase tracking-widest font-mono">Email
                                        Address</label>
                                </div>

                                <div class="relative group">
                                    <input v-model="form.phone" type="tel" required
                                        class="peer w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-violet-500 transition-all placeholder-transparent">
                                    <label
                                        class="absolute left-0 top-3 text-zinc-600 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-violet-500 uppercase tracking-widest font-mono">Phone
                                        No.</label>
                                </div>
                            </div>

                            <div class="relative group">
                                <input v-model="form.company" type="text"
                                    class="peer w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-violet-500 transition-all placeholder-transparent">
                                <label
                                    class="absolute left-0 top-3 text-zinc-600 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-violet-500 uppercase tracking-widest font-mono">Company
                                    Name (Optional)</label>
                            </div>

                            <div class="relative group">
                                <textarea v-model="form.message" rows="4" required
                                    class="peer w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-violet-500 transition-all placeholder-transparent resize-none"></textarea>
                                <label
                                    class="absolute left-0 top-3 text-zinc-600 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-violet-500 uppercase tracking-widest font-mono">Tell
                                    me about your project</label>
                            </div>

                            <button type="submit"
                                class="group relative w-full py-6 bg-violet-600 rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                                :disabled="loading">
                                <div
                                    class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 mix-blend-difference">
                                </div>
                                <span
                                    class="relative z-10 text-white font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                                    <span v-if="loading">Processing...</span>
                                    <span v-else>Submit Inquiry</span>
                                    <Icon icon="ph:paper-plane-tilt-bold" />
                                </span>
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<script setup>
import { Icon } from '@iconify/vue';
import gsap from 'gsap';

const route = useRoute();
const planName = ref(route.query.plan?.replace('-', ' ') || 'Custom');
// const formContainer = ref(null)
const formCard = ref(null);
const titleSection = ref(null);
const loading = ref(false);
const form = ref({name:'',email:'',phone:'',company:'',message:''})

onMounted(()=>{
    const tl = gsap.timeline({defaults:{ease:"power4.out"}});
    tl.from(titleSection.value,{
        y:50,
        opacity:0,
        duration:1.2
    })
    .from(formCard.value,{
        x:50,
        opacity:0,
        duration:1.2,
    },"-=0.8");
})

const handleBooking = async () => {
  loading.value = true;
  // Simulate API call
  setTimeout(() => {
    alert(`Request for ${props.selectedPlan.name} sent successfully!`);
    loading.value = false;
    closeForm();
  }, 1500);
};

</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>