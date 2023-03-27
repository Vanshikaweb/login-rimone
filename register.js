
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.getElementById("fullname").value;
  const userName = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    console.error("Passwords do not match.");
    alert("Passwords do not match.");
    return;
  }

  fetch("http://www.rimone.online:3000/api/users", {
    method: "POST",
    body: JSON.stringify({ name:fullName,guid:userName, phone, email, password }),
    headers: { "Content-Type": "application/json" },
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    if (response) {
    
      window.location.href = "/index.html";
    }
      else {
        console.error("Registration failed.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});


