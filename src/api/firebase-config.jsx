import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCYmm2iODdGTRF3d0JX57rMPQjIylenNqc",
  authDomain: "crazee-burger-a57ff.firebaseapp.com",
  projectId: "crazee-burger-a57ff",
  storageBucket: "crazee-burger-a57ff.appspot.com",
  messagingSenderId: "906418772473",
  appId: "1:906418772473:web:5f4381f3bbd8d2f293c528",
  measurementId: "G-362M8LD3H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //for connecting in database firebase
export const db = getFirestore(app) // ref bdd firestore
// const analytics = getAnalytics(app);