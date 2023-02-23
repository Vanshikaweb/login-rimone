const loginForm = document.querySelector('#login-form');
const loginButton = document.querySelector('#login-btn');

// Add event listener to the login button to handle form submission
loginButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission from reloading the page

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  // Make a fetch request to your API endpoint to handle login
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => {
    if (response.ok) {
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
