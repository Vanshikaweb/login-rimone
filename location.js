fetch("http://dev.rimone.online:3000/api/chargers/location", {
  method: "GET",
  headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
})
  .then((response) => response.json())
  .then((locations) => {
    console.log(locations);

    const tbody = document.getElementById("location-data");

    locations.forEach((location) => {
      const row = `
        <tr>
          <td>${location.name}</td>
          <td>${location.use}</td>
          <td>${location.type}</td>
          <td>${location.line1}</td>
          <td>${location.line2}</td>
          <td>${location.latitute}</td>
          <td>${location.longitute}</td>
          <td>${location.country}</td>
          <td>${location.state}</td>
          <td>${location.city}</td>
          <td>${location.pinCode}</td>
          <td>${location.amenities}</td>
          <td>${location.photos}</td>
          <td>${location.review}</td>
          <td>${location.stars}</td>
          <td>${location.owner}</td>
          <td>${location.phone}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch((error) => {
    console.error(error);
  });

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const chargerId = urlParams.get("id");

// const table = document.getElementById("");

// //  To edit the location

// const headingsRow = document.createElement("tr");
// table.appendChild(headingsRow);

// // const idHeading = document.createElement("th");
// // idHeading.innerText = "ID";
// // headingsRow.appendChild(idHeading);

// const nameHeading = document.createElement("th");
// nameHeading.innerText = "Location Name";
// headingsRow.appendChild(nameHeading);


// const latitudeHeading = document.createElement("th");
// latitudeHeading.innerText = "Latitute";
// headingsRow.appendChild(latitudeHeading);

// const longitudeHeading = document.createElement("th");
// longitudeHeading.innerText = "Longitute";
// headingsRow.appendChild(longitudeHeading);

// const typeHeading = document.createElement("th");
// typeHeading.innerText = "Location Type";
// headingsRow.appendChild(typeHeading);

// const useHeading = document.createElement("th");
// useHeading.innerText = "Location Use";
// headingsRow.appendChild(useHeading);

// const line1Heading = document.createElement("th");
// line1Heading.innerText = "Address Line 1";
// headingsRow.appendChild(line1Heading);

// const line2Heading = document.createElement("th");
// line2Heading.innerText = "Address Line 2";
// headingsRow.appendChild(line2Heading);

// const cityHeading = document.createElement("th");
// cityHeading.innerText = "City";
// headingsRow.appendChild(cityHeading);

// const stateHeading = document.createElement("th");
// stateHeading.innerText = "State";
// headingsRow.appendChild(stateHeading);

// const countryHeading = document.createElement("th");
// countryHeading.innerText = "Country";
// headingsRow.appendChild(countryHeading);
// const pincodeHeading = document.createElement("th");
// pincodeHeading.innerText = "Pin Code";
// headingsRow.appendChild(pincodeHeading);


// const amenitiesHeading = document.createElement("th");
// amenitiesHeading.innerText = "Amenities";
// headingsRow.appendChild(amenitiesHeading);

// const photosHeading = document.createElement("th");
// photosHeading.innerText = "Photos";
// headingsRow.appendChild(photosHeading);

// const reviewHeading = document.createElement("th");
// reviewHeading.innerText = "Review";
// headingsRow.appendChild(reviewHeading);

// const starHeading = document.createElement("th");
// starHeading.innerText = "Stars";
// headingsRow.appendChild(starHeading);

// const ownerHeading = document.createElement("th");
// ownerHeading.innerText = "Owner";
// headingsRow.appendChild(ownerHeading);
// const phoneHeading = document.createElement("th");
// phoneHeading.innerText = "Phone";
// headingsRow.appendChild(phoneHeading);


// fetch(`http://dev.rimone.online:3000/api/chargers/location`, {
//   method: "GET",
//   headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
// })
//   .then((response) => response.json())
//   .then((chargers) => {
//     console.log(chargers);

//     chargers.forEach((charger) => {
//       const row = document.createElement("tr");
//       table.appendChild(row);

//       // const idCell = document.createElement("td");
//       // idCell.innerText = charger.id;
//       // row.appendChild(idCell);

//       const nameCell = document.createElement("td");
//       nameCell.innerText = charger.name;
//       row.appendChild(nameCell);

//       const powerRating = document.createElement("td");
//       powerRating.innerText = charger.type;
//       row.appendChild(powerRating);

//       const latitudeCell = document.createElement("td");
//       latitudeCell.innerText = charger.latitute;
//       row.appendChild(latitudeCell);

//       const longitude = document.createElement("td");
//       longitude.innerText = charger.longitute;
//       row.appendChild(longitude);

//       const pricePerUnit = document.createElement("td");
//       pricePerUnit.innerText = charger.use;
//       row.appendChild(pricePerUnit);

//       const pricePerMinute = document.createElement("td");
//       pricePerMinute.innerText = charger.line1;
//       row.appendChild(pricePerMinute);

//       const location = document.createElement("td");
//       location.innerText = charger.line2;
//       row.appendChild(location);
      
//       const socketTypeCell = document.createElement("td");
//       socketTypeCell.innerText = charger.country;
//       row.appendChild(socketTypeCell);
      
//       const chargerTypeCell = document.createElement("td");
//       chargerTypeCell.innerText = charger.state;
//       row.appendChild(chargerTypeCell); 
      
//       const availableCell = document.createElement("td");
//       availableCell.innerText = charger.city;
//       row.appendChild(availableCell);
//       const pincodeCell = document.createElement("td");
//      pincodeCell.innerText = charger.pinCode;
//       row.appendChild(availableCell);
//       const available1Cell = document.createElement("td");
//       available1Cell.innerText = charger.amenities;
//       row.appendChild(available1Cell);
//       const available2Cell = document.createElement("td");
//       available2Cell.innerText = charger.photos;
//       row.appendChild(available2Cell);
      
//       const available3Cell = document.createElement("td");
//       available3Cell.innerText = charger.review;
//       row.appendChild(available3Cell);

//       const available4Cell = document.createElement("td");
//       available4Cell.innerText = charger.stars;
//       row.appendChild(available4Cell);

//       const available5Cell = document.createElement("td");
//       available5Cell.innerText = charger.owner;
//       row.appendChild(available5Cell);
//       const available6Cell = document.createElement("td");
//       available6Cell.innerText = charger.phone;
//       row.appendChild(available6Cell);
//     });
//   })

//     .catch((error) => {
//       console.error(error);

//     });

// const headingsRow = document.createElement("tr");
// table.appendChild(headingsRow);

// const idHeading = document.createElement("th");
// idHeading.innerText = "ID";
// headingsRow.appendChild(idHeading);

// const nameHeading = document.createElement("th");
// nameHeading.innerText = "Charger Name";
// headingsRow.appendChild(nameHeading);

// const powerRatingHeading = document.createElement("th");
// powerRatingHeading.innerText = "Power Rating";
// headingsRow.appendChild(powerRatingHeading);

// const latitudeHeading = document.createElement("th");
// latitudeHeading.innerText = "Latitute";
// headingsRow.appendChild(latitudeHeading);

// const longitudeHeading = document.createElement("th");
// longitudeHeading.innerText = "Longitute";
// headingsRow.appendChild(longitudeHeading);

// const pricePerUnitHeading = document.createElement("th");
// pricePerUnitHeading.innerText = "Price per Unit";
// headingsRow.appendChild(pricePerUnitHeading);

// const pricePerMinuteHeading = document.createElement("th");
// pricePerMinuteHeading.innerText = "Price per Minute";
// headingsRow.appendChild(pricePerMinuteHeading);

// const locationHeading = document.createElement("th");
// locationHeading.innerText = "Location";
// headingsRow.appendChild(locationHeading);

// const socketTypeHeading = document.createElement("th");
// socketTypeHeading.innerText = "Socket Type";
// headingsRow.appendChild(socketTypeHeading);

// const chargerTypeHeading = document.createElement("th");
// chargerTypeHeading.innerText = "Charger Type";
// headingsRow.appendChild(chargerTypeHeading);

// const availableHeading = document.createElement("th");
// availableHeading.innerText = "Availability";
// headingsRow.appendChild(availableHeading);


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

//       const powerRating = document.createElement("td");
//       powerRating.innerText = charger.powerRating;
//       row.appendChild(powerRating);

//       const latitudeCell = document.createElement("td");
//       latitudeCell.innerText = charger.latitute;
//       row.appendChild(latitudeCell);

//       const longitude = document.createElement("td");
//       longitude.innerText = charger.longitute;
//       row.appendChild(longitude);

//       const pricePerUnit = document.createElement("td");
//       pricePerUnit.innerText = charger.pricePerUnit;
//       row.appendChild(pricePerUnit);

//       const pricePerMinute = document.createElement("td");
//       pricePerMinute.innerText = charger.pricePerMinute;
//       row.appendChild(pricePerMinute);

//       const location = document.createElement("td");
//       location.innerText = charger.location;
//       row.appendChild(location);
      
//       const socketTypeCell = document.createElement("td");
//       socketTypeCell.innerText = charger.socketType;
//       row.appendChild(socketTypeCell);
      
//       const chargerTypeCell = document.createElement("td");
//       chargerTypeCell.innerText = charger.chargerType
//       row.appendChild(chargerTypeCell); 
      
//       const availableCell = document.createElement("td");
//       availableCell.innerText = charger.available;
//       row.appendChild(availableCell);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });





