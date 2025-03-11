<template>
    <v-container fluid>
        <v-row class="mt-6 mb-10">
            <v-col cols="12" class="padd" id="portfolio">
                <div class="first" id="project">
                    <h1 class="text-h3 mb-8 mt-2 text-uppercase">Projects</h1>
                    <v-row>
                        <v-col cols="12">
                            <div class="child">
                                <v-btn icon="mdi-music-circle-outline" color="black" class="text-white"
                                    size="large"></v-btn>
                                <h3 class="ml-3 mt-4 cursor-none">Music WebApp</h3>
                                <p class="text-grey ml-3 mt-4 text-caption">
                                    Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                                    <br />consectetur adipis
                                </p>

                                <v-btn prepend-icon="mdi-eye" v-on:click="project(1)" class="cursor-pointer mt-3 flex-grow-1" :loading="loading[1]" variant="tonal">
                                    Preview
                                </v-btn>
                            </div>
                            <div class="child">
                                <v-btn icon="mdi-text-search" color="#FBDF7E" class="text-black" size="large"></v-btn>
                                <h3 class="ml-3 mt-4 cursor-none">Dictionary WebApp</h3>
                                <p class="text-grey ml-3 mt-4 text-caption">
                                    Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                                    <br />consectetur adipis
                                </p>
                                <v-btn prepend-icon="mdi-eye" v-on:click="project(2)" class="cursor-pointer mt-3 flex-grow-1" :loading="loading[2]" variant="tonal">
                                    Preview
                                </v-btn>
                            </div>
                            <div class="child">
                                <v-btn icon="mdi-weather-cloudy" color="black" class="text-white" size="large"></v-btn>
                                <h3 class="ml-3 mt-4 cursor-none">Weather WebApp</h3>
                                <p class="text-grey ml-3 mt-4 text-caption">
                                    Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                                    <br />consectetur adipis
                                </p>

                                <v-btn prepend-icon="mdi-eye" v-on:click="project(3)" class="cursor-pointer mt-3 flex-grow-1" :loading="loading[3]" variant="tonal">
                                    Preview
                                </v-btn>
                            </div>

                            <div class="child">
                                <v-btn icon="mdi-movie-open" color="#FBDF7E" class="text-black" size="large"></v-btn>
                                <h3 class="ml-3 mt-4 cursor-none" >Movie Search WebApp</h3>
                                <p class="text-grey ml-3 mt-4 text-caption">
                                    Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                                    <br />consectetur adipis
                                </p>

                                <v-btn prepend-icon="mdi-eye" v-on:click="project(4)" class="cursor-pointer mt-3 flex-grow-1" :loading="loading[4]" variant="tonal">
                                    Preview
                                </v-btn>
                            </div>

                        </v-col>
                    </v-row>
                    <!-- <v-divider></v-divider> -->
                </div>
            </v-col>

            
        </v-row>
    </v-container>
</template>

<script>
export default{
    name:'projectPage',
    data:()=>({
       loading:{
        1:false,
        2:false,
        3:false,
        4:false
       }
    }),
    methods:{
        project(index){
            // this.loading = true
            this.loading[index]=true;
            setTimeout(() => {
                // this.loading = false
            this.loading[index]=false;

                if(index ==1){
                window.open("https://rishu9354.github.io/Music-webapp/", "_blank");
                }
                else if(index == 2){
                    window.open("https://webapp-dictioanay.netlify.app/", "_blank")
                }


            else if(index == 3){
                window.open("https://rishu9354.github.io/Weather_WebApp/", "_blank")
            }
            else if(index == 4){
                window.open("https://rishu9354.github.io/Movie_Search_WebApp/", "_blank")
            }

            }, 3000)

          
          
       
        }
    }
}
</script>

<style>
  .first {
    width: 100%;
    height: 280px;
    text-align: center;
    padding: 2rem 2rem;
  }
  .child {
    display: inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
  }
</style>
