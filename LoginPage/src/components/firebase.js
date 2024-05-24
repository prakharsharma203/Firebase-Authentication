// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu6nW07jFCYV6Q84ZcwajNW3tEgRJ8fF0",
  authDomain: "login-auth-f6bd0.firebaseapp.com",
  projectId: "login-auth-f6bd0",
  storageBucket: "login-auth-f6bd0.appspot.com",
  messagingSenderId: "896257260937",
  appId: "1:896257260937:web:ecfa295cf5001c0958f558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;