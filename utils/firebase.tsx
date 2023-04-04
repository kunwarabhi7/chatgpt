import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyApin1_SQcttelHalbnjBzKZiCsuRAme24",
  authDomain: "chatgpt-76775.firebaseapp.com",
  projectId: "chatgpt-76775",
  storageBucket: "chatgpt-76775.appspot.com",
  messagingSenderId: "1002237390010",
  appId: "1:1002237390010:web:cc50b1bd8d80eb5701a683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
