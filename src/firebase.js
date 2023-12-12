// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3fNY2hH3kcQ_u5KqIfocSaVKjP3L8JXc",
  authDomain: "portfolio-c893e.firebaseapp.com",
  projectId: "portfolio-c893e",
  storageBucket: "portfolio-c893e.appspot.com",
  messagingSenderId: "713688847004",
  appId: "1:713688847004:web:4e292863a48e99d2ef9359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth