const registrationForm = document.getElementById("add-charger-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const serialId = document.getElementById("serialId").value;
  const name = document.getElementById("name").value;
  const powerRating = document.getElementById("powerRating").value;
  const pricePerUnit= document.getElementById("pricePerUnit").value;
  const pricePerMinute = document.getElementById("pricePerMinute").value;
  const location = document.getElementById("location").value;
  const latitute = document.getElementById("latitute").value;
  const longitute = document.getElementById("longitute").value;
  const socketType = document.getElementById("socketType").value;
  const chargerType = document.getElementById("chargerType").value;
  const available = document.getElementById("available").value;

  fetch("http://dev.rimone.online:3000/api/chargers", {
    method: "POST",
    body: JSON.stringify({ serialId, name, powerRating, pricePerUnit, pricePerMinute, location, latitute, longitute, socketType, chargerType, available }),
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
const availableSelect = document.querySelector('#available');

availableSelect.addEventListener('change', function() {
  const isAvailable = availableSelect.value === 'true';
  console.log('isAvailable:', isAvailable);
});

