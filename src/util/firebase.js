import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB_nfLFVqUzqTWget00Lm-ufE1XDhsxTbE",
    authDomain: "mediavelocity-5033d.firebaseapp.com",
    projectId: "mediavelocity-5033d",
    storageBucket: "mediavelocity-5033d.appspot.com",
    messagingSenderId: "131812392138",
    appId: "1:131812392138:web:08e28377cdb5d4bb2b4833",
    measurementId: "G-LWCMLD0DL9"
}
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore();

      
      
      // export default app;
      