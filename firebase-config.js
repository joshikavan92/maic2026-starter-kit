// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlitUKlo9NCdE5eTwU8Mp5xluNA75_1oM",
  authDomain: "maic2026-starter-kit-public.firebaseapp.com",
  databaseURL: "https://maic2026-starter-kit-public-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "maic2026-starter-kit-public",
  storageBucket: "maic2026-starter-kit-public.firebasestorage.app",
  messagingSenderId: "652192026756",
  appId: "1:652192026756:web:cdfaf74132d767520cb2d1",
  measurementId: "G-BYHFNPBY9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);