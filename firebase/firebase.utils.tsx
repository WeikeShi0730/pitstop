import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { teams } from "../data/data.js";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVbMCYH6b034Pc5FS2hNdtQcFtKOXqFMw",
  authDomain: "pitstop-5ba13.firebaseapp.com",
  projectId: "pitstop-5ba13",
  storageBucket: "pitstop-5ba13.appspot.com",
  messagingSenderId: "471258244933",
  appId: "1:471258244933:web:0ab2756cf7458634eb802c",
  measurementId: "G-X8G5K34F0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//** Firestore *****************************/
const uploadData = async () => {
  try {
    for (const team of teams) {
      await addDoc(collection(db, "teams"), team);
    }
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    // console.error("Error adding document: ", e);
  }
};

// uploadData();
