const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const chargerId = urlParams.get("id");

const form = document.getElementById("edit-form");

fetch(`http://dev.rimone.online:3000/api/chargers/${chargerId}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
  },
})
  .then((response) => response.json())
  .then((charger) => {
    console.log(charger);

    // Pre-fill the form fields with the charger data
    form.elements.name.value = charger.name;
    // form.elements.location.value = charger.location ? charger.location.name : "";
    form.elements.serialId.value = charger.serialId;
    form.elements.type.value = charger.type;
    // form.elements.oem.value = charger.oem ? charger.oem.model : "";
    form.elements.minBalance.value = charger.minBalance;
  })
  .catch((error) => {
    console.error(error);
  });

// Add event listener to the save button
const saveButton = document.querySelector(".save-button");
saveButton.addEventListener("click", handleSaveButtonClick);

function handleSaveButtonClick() {
  // Get the updated values from the form
  const updatedCharger = {
    name: form.elements.name.value,
    // location: form.elements.location.value,
    serialId: form.elements.serialId.value,
    type: form.elements.type.value,
    // oem: form.elements.oem.value,
    minBalance: form.elements.minBalance.value,
  };

  console.log("Updated charger data:", updatedCharger);

  // Perform the PATCH request to update the charger data
  fetch(`http://dev.rimone.online:3000/api/chargers/${chargerId}`, {
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
      // Handle the response after updating the charger data
      console.log("Charger data updated successfully:", updatedData);

      // Redirect to charger.html
      window.location.href = "/charger.html";
    })
    .catch((error) => {
      console.error("Error updating charger data:", error);
    });
}

