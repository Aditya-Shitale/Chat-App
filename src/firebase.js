import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTaWOIPrz2q2muJb_-d3ZU-AROyxO32K8",
  authDomain: "chat-a173f.firebaseapp.com",
  projectId: "chat-a173f",
  storageBucket: "chat-a173f.appspot.com",
  messagingSenderId: "115247380193",
  appId: "1:115247380193:web:a1fdf3073f74b1bd95a9a0",
  measurementId: "G-JK3RL9PZZ4"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth =getAuth();
 export const storage = getStorage();
 export const db =getFirestore()

const analytics = getAnalytics(app);