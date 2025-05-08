// globally declare vueuse/motion animation
import { defineNuxtPlugin } from "#app";

import { MotionPlugin } from "@vueuse/motion";
// import anime from 'animejs'

export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.vueApp.use(MotionPlugin)
    // return{
    //     provide:{
    //         anime
    //     }
    // }

})