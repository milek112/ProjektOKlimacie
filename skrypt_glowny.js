// Select DOM elements
const usernamePage = document.getElementById("usernamePage");
const usernameInput = document.getElementById("usernameInput");
const startBtn = document.getElementById("startBtn");
const usernameForm = document.getElementById("usernameForm"); // Select the form

// Store the username
let username = "";

// Function to fade out the username page and redirect to the game page
function startGame(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Store the username
  username = usernameInput.value.trim();

  // Simple validation to ensure a username is entered
  if (username === "") {
    alert("Please enter a username");
    return;
  }

  // Apply fadeOutZoom to the username page (optional, can add CSS for smooth animation)
  usernamePage.classList.add("fadeOutZoom");

  // Wait for the animation to complete before redirecting
  setTimeout(() => {
    // Redirect to the game page (headpage.html)
    window.location.href = "headpage.html"; // This redirects to the game page

    // Optional: Store the username in sessionStorage to pass it to the next page
    sessionStorage.setItem("username", username);
  }, 800); // Match the timing of the fade-out animation (0.8s)
}

// Event listener for form submission (instead of button click)
usernameForm.addEventListener("submit", startGame);
