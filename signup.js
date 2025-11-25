import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
