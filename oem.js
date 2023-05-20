
// fetch("http://dev.rimone.online:3000/api/oems/oem", {
//   method: "GET",
//   headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
// })
//   .then((response) => response.json())
//   .then((oems) => {
//     console.log("OEMs:", oems);

//     const tbody = document.getElementById("oem-data");

//     oems.forEach((oem) => {
//       fetch(`http://dev.rimone.online:3000/api/oems/connector/`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
//       })
//         .then((response) => response.json())
//         .then((connectors) => {
//           console.log("Connectors:", connectors);

//           connectors.forEach((connector) => {
//             const row = `
//               <tr>
//                 <td>${oem.name}</td>
//                 <td>${connector.name}</td>
//                 <td>${oem.model}</td>
//               </tr>
//             `;
//             tbody.innerHTML += row;
//           });
//         })
//         .catch((error) => {
//           console.error("Connectors Error:", error);
//         });
//     });
//   })
//   .catch((error) => {
//     console.error("OEMs Error:", error);
//   });


//   let connectors = [];

//   fetch("http://dev.rimone.online:3000/api/oems/connector", {
//     method: "GET",
//     headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       connectors = data;
//       console.log("Connectors:", connectors);
  
//       fetch("http://dev.rimone.online:3000/api/oems/oem", {
//         method: "GET",
//         headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
//       })
//         .then((response) => response.json())
//         .then((oems) => {
//           console.log("OEMs:", oems);
  
//           const tbody = document.getElementById("oem-data");
  
//           oems.forEach((oem) => {
//             const row = `
//               <tr>
//                 <td>${oem.name}</td>
//                 <td>${oem.name}</td>
//                 <td>${oem.model}</td>
//               </tr>
//             `;
//             tbody.innerHTML += row;
//           });
//         })
//         .catch((error) => {
//           console.error("OEMs Error:", error);
//         });
//     })
//     .catch((error) => {
//       console.error("Connectors Error:", error);
//     });
// fetch("http://dev.rimone.online:3000/api/oems/oem", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//     },
//   })
//     .then((response) => response.json())
//     .then((oems) => {
//       console.log("OEMs:", oems);
  
//       const tbody = document.getElementById("oem-data");
//       const connectorSet = new Set();
  
//       oems.forEach((oem) => {
//         fetch(`http://dev.rimone.online:3000/api/oems/connector/`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//           },
//         })
//           .then((response) => response.json())
//           .then((connectors) => {
//             console.log("Connectors:", connectors);
  
//             connectors.forEach((connector) => {
//               const connectorKey = `${oem.name}_${connector.name}`;
//               if (!connectorSet.has(connectorKey)) {
//                 const row = `
//                   <tr>
//                     <td>${oem.name}</td>
//                     <td>${connector.name}</td>
//                     <td>${oem.model}</td>
//                   </tr>
//                 `;
//                 tbody.innerHTML += row;
//                 connectorSet.add(connectorKey);
//               }
//             });
//           })
//           .catch((error) => {
//             console.error("Connectors Error:", error);
//           });
//       });
//     })
//     .catch((error) => {
//       console.error("OEMs Error:", error);
//     });
// fetch("http://dev.rimone.online:3000/api/oems/oem", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//   },
// })
//   .then((response) => response.json())
//   .then((oems) => {
//     console.log("OEMs:", oems);

//     const tbody = document.getElementById("oem-data");
//     const connectorSet = new Set();

//     oems.forEach((oem) => {
//       fetch("http://dev.rimone.online:3000/api/oems/connector/", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf"
//         },
//       })
//         .then((response) => response.json())
//         .then((connectors) => {
//           console.log("Connectors:", connectors);

//           connectors.forEach((connector) => {
//             const connectorKey = `${oem.name}_${connector.name}`;
//             if (!connectorSet.has(connectorKey)) {
//               const row = `
//                 <tr>
//                   <td>${oem.name}</td>
//                   <td>${connector.name}</td>
//                   <td>${oem.model}</td>
//                 </tr>
//               `;
//               tbody.innerHTML += row;
//               connectorSet.add(connectorKey);
//             }
//           });
//         })
//         .catch((error) => {
//           console.error("Connectors Error:", error);
//         });
//     });
//   })
//   .catch((error) => {
//     console.error("OEMs Error:", error);
//   });

fetch("http://dev.rimone.online:3000/api/chargers/oem", {
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
  .then((oems) => {
    if (!Array.isArray(oems)) {
      throw new Error("Chargers data is not an array");
    }
    console.log(oems);

    const tbody = document.getElementById("oem-data");

    oems.forEach((oem) => {
      const row = `
        <tr>
          <td>${oem.name}</td>
          <td>${oem.connectors}</td>
          <td>${oem.model}</td>
          
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch((error) => {
    console.error(error);
  });
