// Assuming you have an HTML form with id="login-form" that has email and password fields, and a submit button with id="login-btn"
const loginForm = document.querySelector('#login-form');
const loginButton = document.querySelector('#login-btn');

// Add event listener to the login button to handle form submission
loginButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission from reloading the page

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  // Make a fetch request to your API endpoint to handle login
  fetch('http://3.229.255.54:3000/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'email':email,
      'password':password
    },
    // body: JSON.stringify({ email, password })
  })
  .then(response => {
    console.log(response.json())
    if (response.json.auth) {
      // Login was successful, redirect to dashboard page
      window.location.href = '/dashboard.html';
    } else {
      // Login failed, show error message and provide option to register
      const errorMessage = document.querySelector('#error-message');
      errorMessage.style.display = 'block';

      const registerLink = document.createElement('a');
      registerLink.textContent = 'Click here to register for a new account.';
      registerLink.href = '/register.html';
      errorMessage.appendChild(registerLink);
    }
  })
  .catch(error => console.error(error));
});
