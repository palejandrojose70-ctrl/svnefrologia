// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB49Txe7qzfXTAVDwGCZjx1cyQ_P_nDSXk",
  authDomain: "svn-bd.firebaseapp.com",
  projectId: "svn-bd",
  storageBucket: "svn-bd.firebasestorage.app",
  messagingSenderId: "781168284657",
  appId: "1:781168284657:web:e6ffdf8e8b2f981039aa50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);