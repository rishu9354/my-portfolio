<template>
<section id="home">
<!-- parallax effect -->
<v-parallax src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    <v-container class="fill-height">
      
        <v-row class="justify-center align-center flex-column-reverse flex-md-row">
        <v-col cols="12" md="6">
          <h1 class="text-h1 mb-8 text-white">Rishabh Sharma</h1>
          <h3 class="text-h3 mb-8 font-weight-thin text-white">Web Developer</h3>
          <v-btn class="elevation-4 rounded-xl mb-4" color="primary" to="/connect">
            Contact Me
          </v-btn>
        </v-col>
        <v-col class="text-center" cols="12" md="6">
          <v-avatar :size="300" class="elevation-12 mx-auto mb-8">
            <v-img><img src="../assets/hero.jpeg" alt="" width="300"></v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>



</section>

</template>

<script lang="js">
 export default{
    name:"mainPage"
 }
</script>