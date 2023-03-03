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
    }
  })
  .then(response => {
    if (response.status === 200) {
      // Login was successful, redirect to dashboard page
      window.location.href = '/dashboard.html';
    } else {
      // Login failed, show error message and provide option to register
      const errorMessage = document.querySelector('#error-message');
      errorMessage.style.display = 'block';
  
      // Check if the error message element already contains the register link before appending it
      const registerLink = errorMessage.querySelector('a');
      if (!registerLink) {
        const newRegisterLink = document.createElement('a');
        newRegisterLink.textContent = 'Click here to register for a new account.';
        newRegisterLink.href = '/register.html';
        errorMessage.appendChild(newRegisterLink);
      }
    }
  })
  .catch(error => console.error(error));
  
});

