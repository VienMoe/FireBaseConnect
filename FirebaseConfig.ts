import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbRtLRnKVRrB9hlXXggCWeTbvOJVv_HZQ",
  authDomain: "fir-tutorial-e18f3.firebaseapp.com",
  projectId: "fir-tutorial-e18f3",
  storageBucket: "fir-tutorial-e18f3.appspot.com",
  messagingSenderId: "411291737026",
  appId: "1:411291737026:web:01b2405484fe44ff75145b",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
