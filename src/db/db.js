import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB_IGVOXg__X_YmAT9sa3EDX2n3L-XOInI",
  authDomain: "petxpress-25bc9.firebaseapp.com",
  projectId: "petxpress-25bc9",
  storageBucket: "petxpress-25bc9.appspot.com",
  messagingSenderId: "995658198922",
  appId: "1:995658198922:web:bffa297e8a9b9e34882273",
  measurementId: "G-L973GT56G7"
};



initializeApp(firebaseConfig);

const db = getFirestore()

export default db
