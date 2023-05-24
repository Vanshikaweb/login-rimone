

const allcharger = document.getElementById("allcharger");

fetch(`http://dev.rimone.online:3000/api/chargers`, {
  method: "GET",
  headers: { "Content-Type": "application/json", 
   "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf", },
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