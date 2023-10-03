// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7J0gKHq6vXQLlS24SjmZuPL4aVX4-xFM",
  authDomain: "adminpanellquizapp.firebaseapp.com",
  projectId: "adminpanellquizapp",
  storageBucket: "adminpanellquizapp.appspot.com",
  messagingSenderId: "11110173402",
  appId: "1:11110173402:web:839333676ea77bb831f3e3",
  measurementId: "G-NJY100KJ5B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
