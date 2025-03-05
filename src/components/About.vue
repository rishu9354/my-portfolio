<template>
    <v-container id="about">
        <!-- about section -->
        <v-row class="justify-center align-center flex-column-reverse flex-md-row mt-6">
            <v-col cols="12" md="6">
                <h1 class="text-h3 mb-8 mt-2 text-uppercase text-center">About Us</h1>
                <v-card-text class="text-h6 text-center"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                    reprehenderit quisquam cupiditate quia dolores suscipit neque perspiciatis iusto iure. Beatae ipsum
                    fuga eos incidunt magnam vero similique delectus eligendi laudantium commodi, molestias, sapiente
                    accusantium possimus culpa, dignissimos tenetur ipsam placeat dolorem? Perferendis a temporibus
                    aliquam iusto exercitationem? Sapiente, beatae vel. </v-card-text>

                   
            </v-col>
        </v-row>

        <v-row class="flex-column-reverse flex-md-row justify-center align-center mt-6">
            <v-col cols="8" md="3">
                <v-card  text="Happy Client" title="+100" class="text-center">
                    <v-icon></v-icon>
                </v-card>

            </v-col>

            <v-col cols="8" md="3">
                <v-card text="Projects" title="+150" class="text-center"></v-card>

            </v-col>

            <v-col cols="8" md="3">
                <v-card text="Years Experience" title="+1" class="text-center"></v-card>

            </v-col>
            </v-row>

            
    </v-container>

    <v-container>
        <v-row class="justify-center align-center flex-column-reverse flex-md-row mt-6">

            <!-- eduction section -->
            <v-col cols="12" md="6">
                <h1 class="text-h3 mb-8 mt-6 text-uppercase text-center">My Education</h1>

                <!-- <v-card-text class="text-h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas dolorem, commodi cumque dignissimos sit illo voluptates quos, molestias libero sequi dicta recusandae maxime veritatis ea. Cupiditate, dolorem corrupti reprehenderit totam, voluptate, rerum possimus nemo doloremque explicabo sunt distinctio cumque! Earum blanditiis nisi repellendus non debitis quo neque, vero recusandae.</v-card-text> -->

                <v-timeline align="start">
                    <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="large"
                        :icon="year.icon">
                        <template v-slot:opposite>
                            <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
                        </template>
                        <div>
                            <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
                                {{ year.title }}
                            </h2>
                            <div>
                                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
                                sed euismod convenire
                                principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
                                salutandi sententiae.
                            </div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "aboutPage",
    data() {
        return {
            years: [
                {
                    year: 2018,
                    color: 'red',
                    title: 'Secondary Class 10th',
                    icon:'mdi-school'

                },
                {
                    year: 2020,
                    color: 'pink',
                    title: 'Senior Secondary Class 12th',
                    icon:'mdi-school'


                },
                {
                    year: '2022 - 2025',
                    color: "amber",
                    title: 'Undergraduate Degree (BCA)',
                    icon:'mdi-school'


                }
            ]
        }
    }
}
</script>