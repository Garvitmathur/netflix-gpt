// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdqsmGxC5S5oa9Q6DCGuT7IT7MTLQPkvo",
  authDomain: "netflix-gpt1-f4616.firebaseapp.com",
  projectId: "netflix-gpt1-f4616",
  storageBucket: "netflix-gpt1-f4616.appspot.com",
  messagingSenderId: "195070127565",
  appId: "1:195070127565:web:0cf468a12872c7d5c02884",
  measurementId: "G-Z8ZTFP40MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();