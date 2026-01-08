<template>

    <footer ref="footerScetion"
        class="footer-reveal relative bg-[#0a0a0a] pt-32 pb-10 px-6 md:px-20 border-t border-zinc-900 overflow-hidden text-zinc-800">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] select-none"
            ref="footerBg">
            <h2 class="text-[23vw] font-black uppercase tracking-tighter leading-none text-center">code.with.<br><span class="text-[25vw]">rishu</span></h2>
        </div>

        <div class="max-w-7xl mx-auto z-10 relative">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-end border-b border-zinc-800/50 pb-20">

                <div class="space-y-6">
                    <h3 class="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight uppercase">
                        Let's create something <br />
                        <span class="text-violet-500 italic">extraordinary.</span>
                    </h3>
                    <div class="flex items-center gap-4 group cursor-pointer w-max">
                        <div class="h-[1px] w-12 bg-violet-600 group-hover:w-24 transition-all duration-500"></div>
                        <a href="mailto:rs0530698@gmail.com"
                            class="text-zinc-400 group-hover:text-white font-mono uppercase tracking-widest text-sm transition-colors">rs0530698@gmail.com</a>
                    </div>
                </div>

                <div class="flex flex-col md:items-end space-y-8">
                    <!-- social icons -->
                    <div class="flex gap-8">
                        <a v-for="social in socialLinks" :key="social.icon" :href="social.url" target="_blank"
                            class="social-link text-zinc-500 hover:text-white transition-all duration-300 transform hover:-translate-y-2">
                            <Icon :icon="social.icon" width="32" height="32" />
                        </a>
                    </div>

                    <nav class="flex gap-6 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                        <a v-for="link in navLinks" :key="link.name" :href="link.path"
                            class="hover:text-violet-500 transition-colors">
                            {{ link.name }}
                        </a>
                    </nav>
                </div>

                <div class="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">

                    <p class="text-xs text-zinc-600 font-mono uppercase tracking-widest">
                        © {{ new Date().getFullYear() }} code.with.rishu — where vue meets motion - powered by gsap
                    </p>
                </div>

                <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                    </div>
                    <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">Available for projects /
                        Collaboration</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerScetion = ref(null);
const footerBg = ref(null);

const socialLinks =[
    { icon: 'mdi:instagram', url: 'https://www.instagram.com/_itsrisharma_/' },
  { icon: 'mdi:github', url: 'https://github.com/rishu9354' },
  { icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/risharma-21a4ba237/' }
]

const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Work', path: '#projects' },
   { name: 'History', path: '#experince' },
   { name: 'Contact', path: '#connect' },

]

onMounted(()=>{
    // footer reveal animation
    gsap.from(".footer-reveal",{
        y:50,
        opacity:0,
        duration:1.2,
        ease:"power3.out",
        scrollTrigger:{
            trigger:footerScetion.value,
            start:"top 90%"
        }
    });

    // 2. Parallax background text
  gsap.to(footerBg.value, {
    y: -100,
    opacity:1,
    scrollTrigger: {
      trigger: footerScetion.value,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
// 3. Magnetic Hover Effect for social icons
  const links = document.querySelectorAll('.social-link');
  links.forEach(link => {
    link.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY, target } = e;
      const { clientWidth, clientHeight } = target;
      const x = (offsetX - clientWidth / 2) * 0.5;
      const y = (offsetY - clientHeight / 2) * 0.5;
      gsap.to(link, { x, y, duration: 0.3 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { x: 0, y: 0, duration: 0.3 });
    });
  });

})
</script>

<style scoped>
/* High-end agencies use a specific text-rendering */
h3 {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>