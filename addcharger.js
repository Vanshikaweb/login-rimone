const registrationForm = document.getElementById("add-charger-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const serialId = document.getElementById("serialId").value;
  
  // const location = document.getElementById("location").value;
 
  
  const type = document.getElementById("type").value;
  const name = document.getElementById("name").value;
  

  fetch("http://dev.rimone.online:3000/api/chargers", {
    method: "POST",
    body: JSON.stringify({ serialId,  type, name}),
    headers: { "Content-Type": "application/json",
    "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
   },
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    if (response) {
    
      window.location.href = "/chargerlist.html";
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


