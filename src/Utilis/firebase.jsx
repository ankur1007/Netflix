// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_MsIATBExexOANdTF6lhGQQGW9tyGVFk",
  authDomain: "netflix-37530.firebaseapp.com",
  projectId: "netflix-37530",
  storageBucket: "netflix-37530.firebasestorage.app",
  messagingSenderId: "980317405801",
  appId: "1:980317405801:web:01a8e66f1c37591f2798f8",
  measurementId: "G-7Q4J5FQ17W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getAuth  } from "firebase/auth";

export const auth = getAuth();


