// Assuming you have an HTML form with id="login-form" that has email and password fields, and a submit button with id="login-btn"
const loginForm = document.querySelector("#login-box");
const loginButton = document.querySelector("#login-btn");

// Add event listener to the login button to handle form submission
loginButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission from reloading the page



  fetch("http://dev.rimone.online:3000/api/users/login", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
 
  },
})

    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.auth == true) {
        // Login was successful, redirect to dashboard page
        // console.log(response)
        window.location.href = "/dashboard.html?id=" + response.id;

        
      } else {
        // Login failed, show error message and provide option to register
        const errorMessage = document.querySelector("#error-message");
        errorMessage.style.display = "block";

        // Check if the error message element already contains the register link before appending it
        const registerLink = errorMessage.querySelector("a");
        if (!registerLink && errorMessage.style.display === "block") {
          const newRegisterLink = document.createElement("a");
          newRegisterLink.textContent =
            "You are not registered.";
          // newRegisterLink.href = "/register.html";
          // errorMessage.appendChild(newRegisterLink);
        }
      }
    })
    .catch((error) => console.error(error));
});

