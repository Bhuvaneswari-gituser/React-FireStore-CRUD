import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyABSLM3lW6mNWtDKBuwzYmWxG45ztV_l0I",
  authDomain: "react-crud-e44d6.firebaseapp.com",
  projectId: "react-crud-e44d6",
  storageBucket: "react-crud-e44d6.appspot.com",
  messagingSenderId: "450238748329",
  appId: "1:450238748329:web:d74c7b2e4036e451cffbb8",
  measurementId: "G-1DMXVQ6TMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)