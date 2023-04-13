// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAOH_4XNR5PgcSUjFQkIrnYjVgWiKLiWpQ",
  authDomain: "reactapp-a11a3.firebaseapp.com",
  projectId: "reactapp-a11a3",
  storageBucket: "reactapp-a11a3.appspot.com",
  messagingSenderId: "449696998426",
  appId: "1:449696998426:web:0d5e5557ccc9223fd69da3",
  measurementId: "G-BX9L2WZ77V"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};