<template>  
    <div class="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-100 to-violet-300">
        <div class="bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl flex overflow-hidden max-w-4xl w-full">
            
            <div class="flex items-center justify-center w-full md:w-1/2 bg-white/40 p-6">
                <img src="/images/Contact-us.png" alt="contact-us-pic" class="w-96 h-auto object-contain">
            </div>

            <div class="w-full md:w-1/2 p-8">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Contact-us</h2>

               
                <form action="" @submit.prevent="onSubmit" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label> 
                        <input type="text" name="name" placeholder="Enter your Name"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" v-model="form.name">

                    </div>
                    <div>   
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                     <input type="email" name="email" placeholder="Enter your Email"
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" v-model="form.email">
                    </div>

                    <div>   
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                     <input type="number" name="phone" placeholder="Enter your Phone Number"
                     class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" v-model="form.phone">
                    </div>

                    <div>   
                        <label for="msg" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea name="msg" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" v-model="form.message" placeholder="Enter your Message"></textarea>
                    </div>
                        <button type="submit"
                        class="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-800 transition duration-300 font-semibold mt-7">
                        <span v-if="isLoading">Loading..</span>
                        <span v-else>Login</span>

                        </button>
                </form>
            </div>

        </div>
    </div>
</template>

<script setup>

import { collection,addDoc } from 'firebase/firestore';

const isLoading = ref(false);
const { $db } = useNuxtApp();
const form = reactive({
    name:"",
    email:"",
    phone:"",
    message:""
})

async function onSubmit() {
    isLoading.value = true;
    try {
        await addDoc(collection($db,'contacts'),{
            name:form.name,
            email:form.email,
            phone:form.phone,
            message:form.message,
            timestamp:new Date()
        });
        alert("Message sent");
        form.name = form.email= form.phone = form.message ='';
    } catch (error) {
        console.error(error);
        alert('Something went wrong');
    } finally{
        isLoading.value = false;
    }

    navigateTo("/");   
}
</script>