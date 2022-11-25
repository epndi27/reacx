import "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// import { app } from './firebase.tsx';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQRzqmuQPhV1tMoVHXB7rbjfCvN4q1K9o",
    authDomain: "rakit-pc-b2.firebaseapp.com",
    projectId: "rakit-pc-b2",
    storageBucket: "rakit-pc-b2.appspot.com",
    messagingSenderId: "969496212238",
    appId: "1:969496212238:web:a86801943d7cba18dcdd5f"
  };

  const app = initializeApp(firebaseConfig);
  //  const init = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  // const authFB = init.auth();

export default app;