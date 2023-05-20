
// window.location.href = "/dashboard.html?id=" + response.id;

// const userId= document.getElementById("users-id"); // Change this to the username of the successfully registered user


// Get the logout button
// Select the HTML element that displays the number of chargers

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
// Fetch the data from the API



$(document).ready(function() {
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $(this).find('span').toggleClass('fa-bars fa-times');
  });
});

const numberOfChargersElement = document.getElementById("charger");
const numberOfConnectorElement = document.getElementById("connector");
const locationElement = document.getElementById("location");
// const availabilityElement = document.getElementById("availability");
// Fetch the number of chargers from the API
fetch(`http://dev.rimone.online:3000/api/chargers/location`, {
  method: "GET",
  headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
})

.then((response) => response.json())
.then((response) => {
  console.log(response);

  const charger = response; 


    const locations = charger.length;

   locationElement.textContent = locations;

   
  })
  .catch(error => {
    console.error(error);
    // Display an error message in the HTML element
    numberOfChargersElement.textContent = "Error loading number of chargers.";
  });
  
  fetch(`http://dev.rimone.online:3000/api/chargers/`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
  })
  
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  
    const charger = response; 
      // Extract the number of chargers from the data
      const numberOfChargers = charger.length;
  
      // Update the HTML code to display the new value
      numberOfChargersElement.textContent = numberOfChargers;
  
     
    })
    .catch(error => {
      console.error(error);
      // Display an error message in the HTML element
      numberOfChargersElement.textContent = "Error loading number of chargers.";
    });

    fetch(`http://dev.rimone.online:3000/api/chargers/connector`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
    })
    
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    
      const charger = response; 
        // Extract the number of chargers from the data
        const numberOfConnector = charger.length;
    
        // Update the HTML code to display the new value
        numberOfConnectorElement.textContent = numberOfConnector;
    
       
      })
      .catch(error => {
        console.error(error);
        // Display an error message in the HTML element
        numberOfConnectorElement.textContent = "Error loading number of chargers.";
      });