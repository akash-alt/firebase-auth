// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9YQ4LdZOMPAGb0H9c4nr8Lox6oBL87kA",
  authDomain: "fir-auth-1-1a236.firebaseapp.com",
  projectId: "fir-auth-1-1a236",
  storageBucket: "fir-auth-1-1a236.appspot.com",
  messagingSenderId: "31405982191",
  appId: "1:31405982191:web:fe02768f668e664f7c361a",
  measurementId: "G-35WV05D193"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
