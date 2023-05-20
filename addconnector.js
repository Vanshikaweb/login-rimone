const registrationForm = document.getElementById("add-connector-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const maxPower = document.getElementById("maxPower").value;
 
  const socketType = document.getElementById("socketType").value;
  const name = document.getElementById("name").value;

  fetch("http://dev.rimone.online:3000/api/chargers/connector", {
    method: "POST",
    body: JSON.stringify({ maxPower, socketType, name}),
    headers: { "Content-Type": "application/json",
    "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
   },
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    if (response) {
    
      window.location.href = "/dashboard.html";
    }
      else {
        console.error("Registration failed.");
      }
    })
    //error
    .catch((error) => {
      console.error(error);

    });
});

