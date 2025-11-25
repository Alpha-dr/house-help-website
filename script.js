// AUTH FUNCTIONS

function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("user-status").innerText = "Signup Successful!";
        })
        .catch(error => {
            document.getElementById("user-status").innerText = error.message;
        });
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("user-status").innerText = "Login Successful!";
        })
        .catch(error => {
            document.getElementById("user-status").innerText = error.message;
        });
}

function logout() {
    auth.signOut();
    document.getElementById("user-status").innerText = "Logged out!";
}


// Track logged-in user
auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById("user-status").innerText =
            "Logged in as: " + user.email;
    }
});

