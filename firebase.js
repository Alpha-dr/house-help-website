import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbPvByCy4wMu2BAoKYlQqpgSeaIBTYJSo",
  authDomain: "house-help-d4a29.firebaseapp.com",
  projectId: "house-help-d4a29",
  storageBucket: "house-help-d4a29.firebasestorage.app",
  messagingSenderId: "541067969082",
  appId: "1:541067969082:web:eec4d9e43dc4e2395d6b03"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
