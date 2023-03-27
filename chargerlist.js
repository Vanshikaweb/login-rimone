
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const userId = urlParams.get("id");

const allcharger = document.getElementById("allcharger");

// const userId= document.getElementById("users-id"); // Change this to the username of the successfully registered user

fetch(`http://www.rimone.online:3000/api/chargers/`, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
response.forEach(charger => {
    // const charger = response; 
    const reFn= `redirecttocharger(${charger.id})`;
    const msg = `<button onclick= "${reFn}" style="margin-bottom: 30px;"><h1>Charger Name: ${charger.name}</h1></button>`;
    var item = document.createElement("li");
    item.innerHTML = msg;
    allcharger.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
})
   
  .catch((error) => {
    console.error(error);
  });
function redirecttocharger(chargerid){

   return window.location.href = "/chargerall.html?id=" + chargerid;
}