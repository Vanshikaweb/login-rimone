const registrationForm = document.getElementById("add-charger-form");
const connectorDropdown = document.getElementById("location");
const connectorDropdownoem = document.getElementById("oem");

fetch("http://dev.rimone.online:3000/api/chargers/oem", {  // Fetch OEM data
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
  },
})
  .then(response => response.json())
  .then(data => {
    console.log("OEM data:", data);
    if (Array.isArray(data)) {
      data.forEach(oem => {
        const option = document.createElement("option");
        option.value = oem.model;
        option.textContent = oem.model;
        connectorDropdownoem.appendChild(option);
      });
    } else {
      console.error("Invalid data format. Expected an array.");
    }
  })
  .catch(error => {
    console.error("Failed to fetch OEM data:", error);
  });

fetch("http://dev.rimone.online:3000/api/chargers/location", {  // Fetch location data
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
  },
})
  .then(response => response.json())
  .then(data => {
    console.log("Location data:", data);
    if (Array.isArray(data)) {
      data.forEach(location => {
        const option = document.createElement("option");
        option.value = location.name;
        option.textContent = location.name;
        connectorDropdown.appendChild(option);
      });
    } else {
      console.error("Invalid data format. Expected an array.");
    }
  })
  .catch(error => {
    console.error("Failed to fetch location data:", error);
  });

// Rest of your code remains the same


registrationForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const selectedConnectoroem=  connectorDropdownoem.value;
  const selectedConnector = connectorDropdown.value;
  const serialId = document.getElementById("serialId").value;
  const minBalance=document.getElementById("minBalance").value;
  console.log("Name:", name);
  console.log("Serial ID", serialId);
  console.log("Selected location:", selectedConnector);
  console.log("Type:", type);
  console.log("Selected OEM:", selectedConnectoroem);
  console.log("Min. Balance:", minBalance);


  fetch("http://dev.rimone.online:3000/api/chargers/", {
    method: "POST",
    body: JSON.stringify({ name, location: selectedConnector, type, serialId, minBalance, selectedConnectoroem }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
    },
  })
    .then(response => response.json())
    .then(response => {
      console.log("Response:", response);
      if (response) {
        window.location.href = "/charger.html";
      } else {
        console.error("Failed.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

