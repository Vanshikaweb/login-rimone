// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const chargerId = urlParams.get("id");

// const table = document.getElementById("allcharger");

// // Create the headings row and add it to the table
// const headingsRow = document.createElement("tr");
// table.appendChild(headingsRow);

// const idHeading = document.createElement("th");
// idHeading.innerText = "Serial ID";
// headingsRow.appendChild(idHeading);

// const nameHeading = document.createElement("th");
// nameHeading.innerText = "Charger Name";
// headingsRow.appendChild(nameHeading);



// const chargerTypeHeading = document.createElement("th");
// chargerTypeHeading.innerText = "Charger Type";
// headingsRow.appendChild(chargerTypeHeading);


// fetch(`http://dev.rimone.online:3000/api/chargers/`, {
//   method: "GET",
//   headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
// })
//   .then((response) => response.json())
//   .then((chargers) => {
//     console.log(chargers);

//     chargers.forEach((charger) => {
//       const row = document.createElement("tr");
//       table.appendChild(row);

//       const idCell = document.createElement("td");
//       idCell.innerText = charger.id;
//       row.appendChild(idCell);

//       const nameCell = document.createElement("td");
//       nameCell.innerText = charger.name;
//       row.appendChild(nameCell);

    

//       // const location = document.createElement("td");
//       // location.innerText = charger.location;
//       // row.appendChild(location);
      
      
      
//       const chargerTypeCell = document.createElement("td");
//       chargerTypeCell.innerText = charger.chargerType
//       row.appendChild(chargerTypeCell); 
      
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// fetch("http://dev.rimone.online:3000/api/chargers/", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//   },
// })
//   .then((response) => response.json())
//   .then((chargers) => {
//     console.log("OEMs:", chargers);

//     const tbody = document.getElementById("charger-data");
//     const locationSet = new Set();

//     chargers.forEach((charger) => {
//       fetch("http://dev.rimone.online:3000/api/chargers/location/", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//         },
//       })
//         .then((response) => response.json())
//         .then((location) => {
//           console.log("Location:", location);

//           const locationKey = `${charger.name}_${location.name}`;
//           if (!locationSet.has(locationKey)) {
//             fetch("http://dev.rimone.online:3000/api/chargers/oem/", {
//               method: "GET",
//               headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//               },
//             })
//               .then((response) => response.json())
//               .then((oem) => {
//                 console.log("OEM:", oem);

//                 const row = `
//                   <tr>
//                     <td>${charger.serialId}</td>
//                     <td>${location.name}</td>
//                     <td>${charger.name}</td>
//                     <td>${charger.type}</td>
//                     <td>${oem.name}</td>
//                     <td>${charger.minBalance}</td>
//                   </tr>
//                 `;
//                 tbody.innerHTML += row;
//                 locationSet.add(locationKey);
//               })
//               .catch((error) => {
//                 console.error("OEM Error:", error);
//               });
//           }
//         })
//         .catch((error) => {
//           console.error("Location Error:", error);
//         });
//     });
//   })
//   .catch((error) => {
//     console.error("OEMs Error:", error);
//   });
// const locationId = urlParams.get("id");
// const Id = urlParams.get("id");
// fetch("http://dev.rimone.online:3000/api/chargers/", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//   },
// })
//   .then((response) => response.json())
//   .then((chargers) => {
//     console.log("Chargers:", chargers);

//     const tbody = document.getElementById("charger-data");
//     const locationSet = new Set();

//     chargers.forEach((charger) => {
//       fetch(`http://dev.rimone.online:3000/api/chargers/location/${id}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//         },
//       })
//         .then((response) => response.json())
//         .then((location) => {
//           console.log("Location:", location);

//           const locationKey = `${charger.name}_${location.name}`;
//           if (!locationSet.has(locationKey)) {
//             fetch(`http://dev.rimone.online:3000/api/oem/${id}`, {
//               method: "GET",
//               headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//               },
//             })
//               .then((response) => response.json())
//               .then((oem) => {
//                 console.log("OEM:", oem);

//                 const row = `
//                   <tr>
//                     <td>${charger.serialId}</td>
//                     <td>${location.name}</td>
//                     <td>${charger.name}</td>
//                     <td>${charger.type}</td>
//                     <td>${oem.name}</td>
//                     <td>${charger.minBalance}</td>
//                   </tr>
//                 `;
//                 tbody.innerHTML += row;
//                 locationSet.add(locationKey);
//               })
//               .catch((error) => {
//                 console.error("OEM Error:", error);
//               });
//           }
//         })
//         .catch((error) => {
//           console.error("Location Error:", error);
//         });
//     });
//   })
//   .catch((error) => {
//     console.error("Charger Error:", error);
//   });
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const chargerId = urlParams.get("id");
// const allcharger = document.getElementById("allcharger");
// chargers.forEach((charger) => {
//   const locationId = charger.location; // Assuming location ID is provided

  // Fetch the location details based on the ID
 
 
fetch("http://dev.rimone.online:3000/api/chargers/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((chargers) => {
    if (!Array.isArray(chargers)) {
      throw new Error("Chargers data is not an array");
    }
    console.log(chargers);

    const tbody = document.getElementById("charger-data");

    chargers.forEach((charger) => {
      const row = `
        <tr>
          <td>${charger.name}</td>
          <td>${charger.location}</td>
          <td>${charger.serialId}</td>
          <td>${charger.type}</td>
          <td>${charger.oem}</td>
          <td>${charger.minBalance}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch((error) => {
    console.error(error);
  });

