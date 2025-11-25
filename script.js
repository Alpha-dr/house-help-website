import { auth } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// SIGNUP
function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            document.getElementById("user-status").innerText = "Signup Successful!";
            window.location.href = "dashboard.html";   // ENABLED REDIRECT
        })
        .catch(error => {
            document.getElementById("user-status").innerText = error.message;
        });
}

// LOGIN
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            document.getElementById("user-status").innerText = "Login Successful!";
            window.location.href = "dashboard.html";  // ENABLED REDIRECT
        })
        .catch(error => {
            document.getElementById("user-status").innerText = error.message;
        });
}

// LOGOUT
function logout() {
    signOut(auth)
        .then(() => {
            document.getElementById("user-status").innerText = "Logged out!";
        });
}

// TRACK USER STATE
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("user-status").innerText = "Logged in as: " + user.email;
    } else {
        document.getElementById("user-status").innerText = "Not logged in";
    }
});

// ⭐ Attach functions to window
window.signup = signup;
window.login = login;
window.logout = logout;
