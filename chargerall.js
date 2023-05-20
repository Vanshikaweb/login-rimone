
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const chargerId = urlParams.get("id");

const allcharger = document.getElementById("allcharger");

// const userId= document.getElementById("users-id"); // Change this to the username of the successfully registered user

fetch(`http://dev.rimone.online:3000/api/chargers/${chargerId}`, {
  method: "GET",
  headers: { "Content-Type": "application/json", 
  "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf", },
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    const charger = response; // Get the first user from the filtered response
    const msg = `<h1>Charger Name: ${charger.name}</h1>
        <h2>Location: ${charger.location.name}</h2>
       
        <h2>Serial Id: ${charger.serialId}</h2> 
        <h2>charger Type: ${charger.type}</h2> 
        <h2>Model Name: ${charger.oem.model}</h2> 
        <h2>Min. Wallet Balance: ${charger.minBalance}</h2> 
        `;
    var item = document.createElement("li");
    item.innerHTML = msg;
    allcharger.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  })
  .catch((error) => {
    console.error(error);
  });
  
  
  

