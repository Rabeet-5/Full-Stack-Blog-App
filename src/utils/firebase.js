// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-app-508fd.firebaseapp.com",
  projectId: "blog-app-508fd",
  storageBucket: "blog-app-508fd.appspot.com",
  messagingSenderId: "97378930445",
  appId: "1:97378930445:web:228adb627a2e7eb703ea44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);