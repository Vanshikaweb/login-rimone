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

  fetch("http://3.229.255.54:3000/api/users", {
    method: "POST",
    body: JSON.stringify({ name:fullName,guid:userName, phone, email, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      console.log(response.json())
      if (response.ok) {
        window.location.href = "dashboard.html";
      } else {
        console.error("Registration failed.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});



