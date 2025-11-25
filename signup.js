import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.getElementById("signupBtn").addEventListener("click", () => {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            // SIGNUP SUCCESSFUL
            console.log("Signup successful!");

            // REDIRECT TO DASHBOARD
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});
