const registrationForm = document.getElementById("add-charger-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const serialId = document.getElementById("serialId").value;
  const name = document.getElementById("name").value;
  const powerRating = document.getElementById("powerRating").value;
  const pricePerUnit= document.getElementById("pricePerUnit").value;
  const pricePerMinute = document.getElementById("pricePerMinute").value;
  const latitute = document.getElementById("latitute").value;
  const longitute = document.getElementById("longitute").value;
  const socketType = document.getElementById("socketType").value;
  const available = document.getElementById("available").value;

  fetch("http://www.rimone.online:3000/api/chargers", {
    method: "POST",
    body: JSON.stringify({ serialId, name, powerRating, pricePerUnit, pricePerMinute, latitute, longitute, socketType, available }),
    headers: { "Content-Type": "application/json" },
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