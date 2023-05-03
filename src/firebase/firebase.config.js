// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq1St0v1RAAAfQgRBruPfEvp7B0CQGCUA",
  authDomain: "the-dish-diary-auth.firebaseapp.com",
  projectId: "the-dish-diary-auth",
  storageBucket: "the-dish-diary-auth.appspot.com",
  messagingSenderId: "420423001545",
  appId: "1:420423001545:web:7638b32d4747dfe630b418",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;