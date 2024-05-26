// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeR-bLY-cLe2i0UvkJzPZ1K7L1VozMpBg",
    authDomain: "flask-web-7bc8c.firebaseapp.com",
    projectId: "flask-web-7bc8c",
    storageBucket: "flask-web-7bc8c.appspot.com",
    messagingSenderId: "9573094501",
    appId: "1:9573094501:web:9f9d750e076f9ea536a28c",
    measurementId: "G-K98GM1G1PR",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
