import { initializeApp, getApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDQRzqmuQPhV1tMoVHXB7rbjfCvN4q1K9o",
    authDomain: "rakit-pc-b2.firebaseapp.com",
    projectId: "rakit-pc-b2",
    storageBucket: "rakit-pc-b2.appspot.com",
    messagingSenderId: "969496212238",
    appId: "1:969496212238:web:a86801943d7cba18dcdd5f"
};
const app = initializeApp(firebaseConfig);
export { app };