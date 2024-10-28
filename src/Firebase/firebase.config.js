// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnvbtAil95p9iL02NdRPNpSKU74Y-uyRY",
  authDomain: "react-email-password-aut-2d56e.firebaseapp.com",
  projectId: "react-email-password-aut-2d56e",
  storageBucket: "react-email-password-aut-2d56e.appspot.com",
  messagingSenderId: "70232560404",
  appId: "1:70232560404:web:1e390ef7134d088190a801"
};
import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;