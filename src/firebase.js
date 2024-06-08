// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS7q-zfKMcqbimPVbe6i2jpLYT17H1i7I",
  authDomain: "react-auth-1f686.firebaseapp.com",
  projectId: "react-auth-1f686",
  storageBucket: "react-auth-1f686.appspot.com",
  messagingSenderId: "309623333604",
  appId: "1:309623333604:web:b1ef8827fbea425b88c2f1",
  measurementId: "G-VY0JCVW48E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);