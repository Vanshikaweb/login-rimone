

const registrationForm = document.getElementById("add-location-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();


  const name = document.getElementById("name").value;
  const use = document.getElementById("use").value;
  const type= document.getElementById("type").value;
  const line1 = document.getElementById("line1").value;
  const line2 = document.getElementById("line2").value;
  const latitute = document.getElementById("latitute").value;
  const longitute = document.getElementById("longitute").value;
  const country = document.getElementById("country").value;
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const pinCode = document.getElementById("pinCode").value;
  const amenities= document.getElementById("amenities").value;
 

  fetch("http://dev.rimone.online:3000/api/chargers/location", {
    method: "POST",
    body: JSON.stringify({  name, use,type,line1, line2, latitute, longitute, country, state, city, pinCode, amenities }),
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
        console.error("Failed to add Location.");
      }
    })
    //error
    .catch((error) => {
      console.error(error);

    });
});









