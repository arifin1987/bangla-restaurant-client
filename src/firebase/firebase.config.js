// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7kNvhTpDmS8C51wZhBmtFYHq4u5oKNXk",
  authDomain: "bangla-restaurant.firebaseapp.com",
  projectId: "bangla-restaurant",
  storageBucket: "bangla-restaurant.appspot.com",
  messagingSenderId: "667479038210",
  appId: "1:667479038210:web:18bb335445b90d24658a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;