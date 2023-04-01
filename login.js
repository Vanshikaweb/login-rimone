// Assuming you have an HTML form with id="login-form" that has email and password fields, and a submit button with id="login-btn"
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-btn");

// Add event listener to the login button to handle form submission
loginButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission from reloading the page

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  // Make a fetch request to your API endpoint to handle login

  // fetch("http://www.rimone.online:3000/api/users/login", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     email: email,
  //     password: password,
  //   },
  // })
  fetch("http://www.rimone.online:3000/api/users/login", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
    email: email,
    password: password,
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
            "Click here to register for a new account.";
          newRegisterLink.href = "/register.html";
          errorMessage.appendChild(newRegisterLink);
        }
      }
    })
    .catch((error) => console.error(error));
});

