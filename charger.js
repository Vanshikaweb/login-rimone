
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
    tbody.innerHTML = ""; // Clear the table before populating with new data

    chargers.forEach((charger) => {
      const row = `
        <tr>
          <td><button class="edit-button" data-id="${charger.id}">${charger.name}</button></td>
          <td>${charger.location}</td>
          <td>${charger.serialId}</td>
          <td>${charger.type}</td>
          <td>${charger.oem}</td>
          <td>${charger.minBalance}</td>
          <td><button class="qr-button" data-serial="${charger.serialId}">QR</button></td>
        </tr>
      `;
      tbody.innerHTML += row;
    });

    // Add event listener to the QR buttons
    const qrButtons = document.getElementsByClassName("qr-button");
    Array.from(qrButtons).forEach((button) => {
      button.addEventListener("click", handleQRButtonClick);
    });

    // Add event listener to the edit buttons
    const editButtons = document.getElementsByClassName("edit-button");
    Array.from(editButtons).forEach((button) => {
      button.addEventListener("click", handleEditButtonClick);
    });
  })
  .catch((error) => {
    console.error(error);
  });

function handleEditButtonClick(event) {
  const chargerId = event.target.getAttribute("data-id");
  // Redirect to the edit.html page with the charger ID
  window.location.href = `/editcharger.html?id=${chargerId}`;
}

function handleQRButtonClick(event) {
  const serialId = event.target.getAttribute("data-serial");
  generateQRCode(serialId);
  showModal();
}

// Refresh the page to display the updated data



// Rest of the code remains the same

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
 
 
 
  
  
  
  
 // ...


// ...


  



// window.addEventListener("load", function() {
//   let chargers = [];

//   fetch("http://dev.rimone.online:3000/api/chargers/", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (!Array.isArray(data)) {
//         throw new Error("Chargers data is not an array");
//       }
//       chargers = data;
//       console.log(chargers);
//       populateChargerTable(chargers);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   const populateChargerTable = (chargers) => {
//     const tbody = document.getElementById("charger-data");
//     tbody.innerHTML = "";

//     chargers.forEach((charger) => {
//       const row = `
//         <tr>
//           <td><button class="edit-button" data-id="${charger.id}">${charger.name}</button></td>
//           <td>${charger.location}</td>
//           <td>${charger.serialId}</td>
//           <td>${charger.type}</td>
//           <td>${charger.oem}</td>
//           <td>${charger.minBalance}</td>
//         </tr>
//       `;
//       tbody.innerHTML += row;
//     });

//     // Add event listeners to the edit buttons
//    const editButtons = document.getElementsByClassName("edit-button");
//     const chargers = JSON.parse(document.currentScript.getAttribute("data-chargers"));
    
//     Array.from(editButtons).forEach((button) => {
//       button.addEventListener("click", function(event) {
//         handleEditButtonClick(event, chargers);
//       });
//     });
    
//     function handleEditButtonClick(event, chargers) {
//       const chargerId = event.target.getAttribute("data-id");
//       const charger = chargers.find((charger) => charger.id === chargerId);

//     const form = `
//       <form id="edit-form-${chargerId}">
//         <label for="charger-name"> Charger Name:</label>
//         <input type="string" id="name"  value="${charger.name}">
       
//         <label for="location">Location:</label>
//         <input  id="location"  value="${charger.location}">
        
//         <label for="serialId">Serial ID:</label>
//         <input type="string" id="serialId"  value="${charger.serialId}">
        
//         <label for="type">Type:</label>
//         <input type="string" id="type"  value="${charger.type}">
        
//         <label for="oem">OEM:</label>
//         <input  id="oem"  value="${charger.oem}">
        
//         <label for="minBalance">Min Balance:</label>
//         <input type="numeric" id="minBalance"  value="${charger.minBalance}">
        
//         <button type="button" class="save-button" data-id="${chargerId}">Save</button>
//       </form>
//     `;

//     const parentRow = event.target.parentNode.parentNode;
//     parentRow.outerHTML = form;

//     const saveButton = document.querySelector(`#edit-form-${chargerId} .save-button`);
//     saveButton.addEventListener("click", handleSaveButtonClick);
//   }

//   function handleSaveButtonClick(event) {
//     const chargerId = event.target.getAttribute("data-id");
//     const form = document.getElementById(`edit-form-${chargerId}`);

//     const updatedCharger = {
//       name: form.elements.name.value,
//       location: form.elements.location.value,
//       serialId: form.elements.serialId.value,
//       type: form.elements.type.value,
//       oem: form.elements.oem.value,
//       minBalance: form.elements.minBalance.value,
//     };

//     fetch(`http://dev.rimone.online:3000/api/chargers/${chargerId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf",
//       },
//       body: JSON.stringify(updatedCharger),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((updatedData) => {
//         console.log("Charger data updated successfully:", updatedData);

//         const newRow = `
//           <tr>
//             <td><button class="edit-button" data-id="${chargerId}">${updatedData.name}</button></td>
//             <td>${updatedData.location}</td>
//             <td>${updatedData.serialId}</td>
//             <td>${updatedData.type}</td>
//             <td>${updatedData.oem}</td>
//             <td>${updatedData.minBalance}</td>
//           </tr>
//         `;

//         form.outerHTML = newRow;

//         const newEditButton = document.querySelector(`#charger-data .edit-button[data-id="${chargerId}"]`);
//         newEditButton.addEventListener("click", handleEditButtonClick);
//       })
//       .catch((error) => {
//         console.error("Error updating charger data:", error);
//       });
//   }
// }
// });

