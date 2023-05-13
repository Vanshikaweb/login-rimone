
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
    const msg = `<h1>username: ${charger.id}</h1>
        <h2>name: ${charger.name}</h2>
        <h2>Power Rating: ${charger.powerRating}</h2>
        <h2>Price Per Unit: ${charger.pricePerUnit}</h2>
        <h2>Price Per Minute: ${charger.pricePerMinute}</h2>
        <h2>Location: ${charger.location}</h2>
        <h2>Latitute: ${charger.latitute}</h2>
        <h2>Longitute: ${charger.longitute}</h2> 
        <h2>socketType: ${charger.socketType}</h2> 
        <h2>chargerType: ${charger.chargerType}</h2> 
        <h2>Available: ${charger.available}</h2>`;
    var item = document.createElement("li");
    item.innerHTML = msg;
    allcharger.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  })
  .catch((error) => {
    console.error(error);
  });

