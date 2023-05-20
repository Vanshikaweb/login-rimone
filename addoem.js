// const registrationForm = document.getElementById("add-oem-form");

// registrationForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const model = document.getElementById("model").value;
 
//   const name = document.getElementById("name").value;

//   fetch("http://dev.rimone.online:3000/api/chargers/oem", {
//     method: "POST",
//     body: JSON.stringify({  name, model}),
//     headers: { "Content-Type": "application/json",
//     "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
//    },
//   })
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     if (response) {
    
//       window.location.href = "/dashboard.html";
//     }
//       else {
//         console.error("Registration failed.");
//       }
//     })
//     //error
//     .catch((error) => {
//       console.error(error);

//     });
// });
// const registrationForm = document.getElementById("add-oem-form");
// const connectorDropdown = document.getElementById("connector");

// // Fetch connector data from the API
// fetch("http://dev.rimone.online:3000/api/chargers/connector")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     if (Array.isArray(data)) {
//       data.forEach(connector => {
//         const option = document.createElement("option");
//         option.value = connector.name;
//         option.textContent = connector.name;
//         connectorDropdown.appendChild(option);
//       });
//     } else {
//       console.error("Invalid data format. Expected an array.");
//     }
//   })
//   .catch(error => {
//     console.error("Failed to fetch connector data:", error);
//   });

// registrationForm.addEventListener("submit", event => {
//   event.preventDefault();

//   const model = document.getElementById("model").value;
//   const name = document.getElementById("name").value;
//   const selectedConnector = connectorDropdown.value;

//   fetch("http://dev.rimone.online:3000/api/chargers/oem", {
//     method: "POST",
//     body: JSON.stringify({ name, model, connector: selectedConnector }),
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//     },
//   })
//     .then(response => response.json())
//     .then(response => {
//       console.log(response);
//       if (response) {
//         window.location.href = "/dashboard.html";
//       } else {
//         console.error("Registration failed.");
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });
const registrationForm = document.getElementById("add-oem-form");
const connectorDropdown = document.getElementById("connector");
fetch("http://dev.rimone.online:3000/api/chargers/connector", {
  method: "GET",
  headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
})
  .then(response => response.json())
  .then(data => {
    console.log("Connector data:", data);
    if (Array.isArray(data)) {
      data.forEach(connector => {
        const option = document.createElement("option");
        option.value = connector.name;
        option.textContent = connector.name;
        connectorDropdown.appendChild(option);
      });
    } else {
      console.error("Invalid data format. Expected an array.");
    }
  })
  .catch(error => {
    console.error("Failed to fetch connector data:", error);
  });

registrationForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const selectedConnector = connectorDropdown.value;
  const model = document.getElementById("model").value;
  console.log("Name:", name);
  console.log("Selected Connector:", selectedConnector);
  console.log("Model:", model);

  fetch("http://dev.rimone.online:3000/api/chargers/oem", {
    method: "POST",
    body: JSON.stringify({ name, connector: selectedConnector, model }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
    },
  })
    .then(response => response.json())
    .then(response => {
      console.log("Response:", response);
      if (response) {
        window.location.href = "/oem.html";
      } else {
        console.error("Failed.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
});


