<template>
<div>
    <Home />
    <About />
    <Skills />
    <Banner />
    <Expre />
    <Feedback />
</div>
</template>

<script setup lang="ts">
import Lenis from 'lenis'


onMounted(()=>{
    // smooth scroller using lenis
    const lenis = new Lenis();
    function raf(time:number){
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


  
})

</script>