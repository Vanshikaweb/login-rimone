
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get("id");

const allusers = document.getElementById("allusers");


fetch(`http://www.rimone.online:3000/api/users/${userId}`, {
  method: "GET",
  headers: { "Content-Type": "application/json", 
   "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf", },
})

  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    const user = response; // Get the first user from the filtered response
    const msg = `<h1>username: ${user.guid}</h1>
        <h2>name: ${user.name}</h2>
        <h2>phone: ${user.phone}</h2>
        <h2>email: ${user.email}</h2>`;
    var item = document.createElement("li");
    item.innerHTML = msg;
    allusers.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  })
  .catch((error) => {
    console.error(error);
  });
// Get the logout button
const logoutBtn = document.getElementById("logout-btn");

// Add a click event listener to the logout button
logoutBtn.addEventListener("click", () => {
  // Clear the user data from local storage
  localStorage.removeItem("user");

  // Redirect the user to the login page
  window.location.href = "index.html";
});