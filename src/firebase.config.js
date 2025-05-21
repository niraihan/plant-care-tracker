// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMqIA7xvKCk2m-O-qTXqmGlc0gu3rtirA",
  authDomain: "assignment10-f3015.firebaseapp.com",
  projectId: "assignment10-f3015",
  storageBucket: "assignment10-f3015.firebasestorage.app",
  messagingSenderId: "252398418692",
  appId: "1:252398418692:web:551eeb5b73c59f6bc32e51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);