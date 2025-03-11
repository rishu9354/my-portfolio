<template>
  <section id="home">
    <!-- parallax effect -->
    <v-parallax
      src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <v-container class="fill-height">

        <v-row class="justify-center align-center flex-column-reverse flex-md-row">
          <v-col cols="12" md="6">
            <h1 class="text-h1 mb-8 text-white">Rishabh Sharma</h1>
            <h3 class="text-h3 mb-8 font-weight-thin text-white">Web Developer</h3>

            <!-- dialog box for conntact -->
            <v-dialog v-model="dialog" max-width="900" id="contact">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="elevation-4 font-weight-regular rounded-xl mb-4 text-white"
                  prepend-icon="mdi-human-greeting-proximity" text="Contact Me" variant="tonal" v-bind="activatorProps">

                </v-btn>
              </template>

              <v-card prepend-icon="mdi-human-greeting-proximity" title="Contact Me">
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12" sm="12" class="px-16">

                      <v-row>
                        <v-col cols="12" sm="4">
                          <div class="child">
                            <h1 class="text-h4 mb-8 mt-2 text-uppercase ">Contact info.</h1>
                            <v-btn icon="mdi-map-marker" color="" class="mt-10" variant="outlined"></v-btn><br />
                            <span class="text-caption">C 165, New Ranjeet Nagar, </span><br />
                            <span class="text-caption">New Delhi = 110008 </span><br />

                            <v-btn icon="mdi-phone-plus" color="" class="mt-10" variant="outlined"></v-btn><br />
                            <span class="text-caption">93546 - 87117 </span> <br />
                            <v-btn icon="mdi-email-plus" color="" class="mt-10" variant="outlined"></v-btn><br />
                            <span class="text-caption">rs0530698@gmail.com </span> <br />
                          </div>
                        </v-col>

                        <v-col cols="12" sm="8">
                          <h1 class="mt-8 text-h4 mb-8">Send your message</h1>
                          <v-divider></v-divider>
                          <span class="text-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                            fugiat officia, odio eaque exercitationem libero nesciunt placeat,
                            repellat obcaecati sed tenetur! Est labore aliquam amet
                            consequatur necessitatibus fugit obcaecati facilis!</span>
                          <v-row class="mt-10">
                            <v-col cols="12" sm="6">
                              <v-text-field label="Name" persistent-hint variant="outlined"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field label="Phone No" persistent-hint variant="outlined"></v-text-field>
                            </v-col>
                          </v-row>
                          <v-textarea label="Message" persistent-hint variant="outlined"></v-textarea>

                        </v-col>
                      </v-row>

                    </v-col>
                  </v-row>
                  

                  <small class="text-caption text-medium-emphasis">*indicates required field</small>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text="Close" variant="plain" @click="dialog = false" class="btn"></v-btn>

                  <v-btn color="success" text="Submit" variant="plain" @click="dialog = false" class="border-md bg-black"></v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>


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
    name:"mainPage",
    data:()=>({
      dialog : false,
    })

 }
</script>

<style>
  .child {
    display: inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
  }
  /* .btn{
    border: 2px solid black;

  } */
</style>