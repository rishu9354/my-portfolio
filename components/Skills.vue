<template>
    <!-- skills -->

    <section id="skills" class="py-20 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <motion-div v-motion="{
            initial:{opacity:0, y:-50},
            visible:{opacity:1, y:0, transition:{duration:0.6}}
        }">

            <h2 class="text-4xl md:text-5xl font-bold font-serif mb-16">
                Work with an expert
            </h2>
        </motion-div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-12">
            <motion-div v-motion="{
                initial: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, type: 'spring', stiffness: 100 } }
            }" class="flex flex-col space-y-4 bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 transition-all duration-300 ease-in-out"
                v-for="(card, index) in cards" :key="index">

                <div class="flex items-center space-x-4">
                    <span class="text-4xl">{{ card.icon }}</span>
                    <h3 class="text-xl font-semibold font-mono text-zinc-800">{{ card.title }}</h3>
                </div>

                <p class="text-zinc-600 font-mono text-base leading-relaxed">Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dicta officiis labore quas aperiam nulla
                    suscipit dolorum autem possimus! Suscipit, dolor?</p>
    
        </motion-div>
        </div>

        <NuxtLink to="/contact" class="flex items-center mx-auto rounded-3xl bg-black text-white py-3 px-6 text-lg w-max hover:bg-zinc-800 transition duration-300">
            Get in touch
            <Icon icon="mdi:arrow-top-right-thin" width="24" height="24" class="ml-2 rounded-full bg-white text-black ml-2" />
        </NuxtLink>
    </section>

</template>

<script setup>
import { Icon } from "@iconify/vue";
 const cards=[
        {icon:'🖥️',title:'Frontend Developer'},
        {icon:'💾',title:'Backend Developer'},
        {icon:'🗄️',title:'Database'},
        {icon:'🔁',title:'Redis'},
        {icon:'🛡️',title:'SEO, Domain and SSL Protection'},
        

    ]
</script>