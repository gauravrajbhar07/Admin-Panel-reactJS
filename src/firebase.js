import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/database";
// import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDI8xphlL5HR4cmbo1ftPmhYdzVflhBNKk",
  authDomain: "reactjs-admin-panel.firebaseapp.com",
  projectId: "reactjs-admin-panel",
  storageBucket: "reactjs-admin-panel.appspot.com",
  messagingSenderId: "886148297152",
  appId: "1:886148297152:web:53c08db374ab2c4dd01825",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
