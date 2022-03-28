import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkKs48ncm4_q3zU-EmpduiI1q2E0Xowms",
  authDomain: "turtle-os-movies-app.firebaseapp.com",
  projectId: "turtle-os-movies-app",
  storageBucket: "turtle-os-movies-app.appspot.com",
  messagingSenderId: "631529499621",
  appId: "1:631529499621:web:5a38a6e5cb3e8682ca1d0c"
};

initializeApp(firebaseConfig); // Set up the firebase env.
export const db = getFirestore();

