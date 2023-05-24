const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// const locationId = urlParams.get("id");
const chargerId = urlParams.get("id");
const form = document.getElementById("edit-form-location");

fetch(`http://dev.rimone.online:3000/api/chargers/location/${chargerId}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
  },
})
  .then((response) => response.json())
  .then((location) => {
    console.log(location);

    // Pre-fill the form fields with the location data
    form.elements.name.value = location.name;
    // form.elements.location.value = location.location ? location.location.name : "";
    form.elements.use.value = location.use;
    form.elements.type.value = location.type;
    // form.elements.oem.value = location.oem ? location.oem.model : "";
    form.elements.line1.value = location.line1;
    form.elements.line2.value = location.line2;
    form.elements.latitute.value = location.latitute;
    form.elements.longitute.value = location.longitute;
    form.elements.country.value = location.country;
    form.elements.state.value = location.state;
    form.elements.city.value = location.city;
    form.elements.pinCode.value = location.pinCode;
    form.elements.amenities.value = location.amenities;
  })
  .catch((error) => {
    console.error(error);
  });
  const saveButton = document.querySelector(".save-button-location");
  saveButton.addEventListener("click", handleSaveButtonClick);
function handleSaveButtonClick() {
  // Get the updated values from the form
  const updatedCharger = {
    name: form.elements.name.value,
    use: form.elements.use.value,
    type: form.elements.type.value,
    line1: form.elements.line1.value,
    line2: form.elements.line2.value,
    latitude: form.elements.latitute.value,
    longitude: form.elements.longitute.value,
    country: form.elements.country.value,
    state: form.elements.state.value,
    city: form.elements.city.value,
    pinCode: form.elements.pinCode.value,
    amenities: form.elements.amenities.value,
  };

  console.log("Updated location data:", updatedCharger);

  // Perform the PATCH request to update the location data
  fetch(`http://dev.rimone.online:3000/api/chargers/location/${chargerId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
    },
    body: JSON.stringify(updatedCharger),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((updatedData) => {
      // Handle the response after updating the location data
      console.log("Charger data updated successfully:", updatedData);

      // Redirect to location.html
      window.location.href = "/location.html";
    })
    .catch((error) => {
      console.error("Error updating location data:", error);
    });
}