// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0wfHCZqIC-Cfc9r3QfknVD0uyEtMRzlg",
  authDomain: "login-fc8b6.firebaseapp.com",
  projectId: "login-fc8b6",
  storageBucket: "login-fc8b6.firebasestorage.app",
  messagingSenderId: "84088347751",
  appId: "1:84088347751:web:d95f0b9a34fe4af67248c2",
  measurementId: "G-QH71PQG7LH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
