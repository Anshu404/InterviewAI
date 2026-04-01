
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "fir-639d8.firebaseapp.com",
  projectId: "fir-639d8",
  storageBucket: "fir-639d8.firebasestorage.app",
  messagingSenderId: "8439114430",
  appId: "1:8439114430:web:d9c21f3ae8225913954cef"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}