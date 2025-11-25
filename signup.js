import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.getElementById("signupBtn").addEventListener("click", () => {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Signup successful!");

            // Redirect
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});
