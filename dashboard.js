
// window.location.href = "/dashboard.html?id=" + response.id;

// const userId= document.getElementById("users-id"); // Change this to the username of the successfully registered user


// Get the logout button

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get("id");
function redirecttoprofile() {

 return window.location.href =`profile.html?id=${userId}`;
}
const logoutBtn = document.getElementById("logout-btn");

// Add a click event listener to the logout button
logoutBtn.addEventListener("click", () => {
  // Clear the user data from local storage
  localStorage.removeItem("user");

  // Redirect the user to the login page
  window.location.href = "index.html";
});
