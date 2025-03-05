<template>
  <!-- navbar -->
  <div>
    <v-toolbar scroll-behavior="elevate collapse" scroll-threshold="1000">
      <v-toolbar-title>Rishbah</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tab href="#home">Home</v-tab>
      <v-tab href="#services">Services</v-tab>
      <v-tab href="#about">About Us</v-tab>
      <v-tab>Skills</v-tab>
      <v-tab>Projects</v-tab>
      <v-tab>Contact Us</v-tab>
      <v-tab>Testimonial</v-tab>
    </v-toolbar>
  </div>

  <mainPage />
  <servicePage />
  <aboutPage/>

 
</template>

<script>
import mainPage from './components/main.vue'
import servicePage from './components/Service.vue'
import aboutPage from './components/About.vue'
export default {
  name: 'App',
  components: {
    mainPage,
    servicePage,
    aboutPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: aliceblue;
  /* margin-top: 60px; */
}
</style>
