const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    console.error("Passwords do not match.");
    return;
  }

  fetch("https://example.com/register", {
    method: "POST",
    body: JSON.stringify({ firstName, lastName, phone, email }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
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


