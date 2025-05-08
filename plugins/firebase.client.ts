// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default defineNuxtPlugin(()=>{
    const firebaseConfig = {
      apiKey: "AIzaSyAiW0SC4FAG94r-ZLpGvySTzPbw7plSdd8",
      authDomain: "portfolio-contact-us-528e3.firebaseapp.com",
      projectId: "portfolio-contact-us-528e3",
      storageBucket: "portfolio-contact-us-528e3.firebasestorage.app",
      messagingSenderId: "396416145084",
      appId: "1:396416145084:web:4ef3a0ff80e239365b22b9",
      measurementId: "G-6GZE9J6ET7"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

    return{
        provide:{
            db
        }
    };

});
