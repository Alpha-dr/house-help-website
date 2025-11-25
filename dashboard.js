// dashboard.js
import { auth } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Protect page: if not logged in, redirect to login
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    // show email if element exists
    const info = document.getElementById("dashboard-user-email");
    if (info) info.textContent = user.email;
  }
});

// logout function
async function logout() {
  try {
    await signOut(auth);
    // after signout go to login or home
    window.location.href = "login.html";
  } catch (err) {
    console.error("Logout failed:", err);
    alert("Logout failed: " + (err && err.message ? err.message : err));
  }
}

// Ensure DOM is ready and attach handler
document.addEventListener("DOMContentLoaded", () => {
  // attach to window for inline onclick usage
  window.logout = logout;

  // attach event listener if button exists
  const btn = document.getElementById("logoutBtn");
  if (btn) {
    btn.removeEventListener("click", logout); // safe remove
    btn.addEventListener("click", logout);
  }
});
