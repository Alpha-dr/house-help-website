import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbPvByCy4wMu2BAoKYlQqpgSeaIBTYJSo",
  authDomain: "house-help-d4a29.firebaseapp.com",
  projectId: "house-help-d4a29",
  storageBucket: "house-help-d4a29.appspot.com",  // FIXED ✔
  messagingSenderId: "541067969082",
  appId: "1:541067969082:web:eec4d9e43dc4e2395d6b03"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
