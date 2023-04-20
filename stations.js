const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const chargerId = urlParams.get("id");

const table = document.getElementById("allcharger");

// Create the headings row and add it to the table
const headingsRow = document.createElement("tr");
table.appendChild(headingsRow);

const idHeading = document.createElement("th");
idHeading.innerText = "ID";
headingsRow.appendChild(idHeading);

const nameHeading = document.createElement("th");
nameHeading.innerText = "Charger Name";
headingsRow.appendChild(nameHeading);

const powerRatingHeading = document.createElement("th");
powerRatingHeading.innerText = "Power Rating";
headingsRow.appendChild(powerRatingHeading);

const latitudeHeading = document.createElement("th");
latitudeHeading.innerText = "Latitute";
headingsRow.appendChild(latitudeHeading);

const longitudeHeading = document.createElement("th");
longitudeHeading.innerText = "Longitute";
headingsRow.appendChild(longitudeHeading);

const pricePerUnitHeading = document.createElement("th");
pricePerUnitHeading.innerText = "Price per Unit";
headingsRow.appendChild(pricePerUnitHeading);

const pricePerMinuteHeading = document.createElement("th");
pricePerMinuteHeading.innerText = "Price per Minute";
headingsRow.appendChild(pricePerMinuteHeading);

const locationHeading = document.createElement("th");
locationHeading.innerText = "Location";
headingsRow.appendChild(locationHeading);

const socketTypeHeading = document.createElement("th");
socketTypeHeading.innerText = "Socket Type";
headingsRow.appendChild(socketTypeHeading);

const chargerTypeHeading = document.createElement("th");
chargerTypeHeading.innerText = "Charger Type";
headingsRow.appendChild(chargerTypeHeading);

const availableHeading = document.createElement("th");
availableHeading.innerText = "Availability";
headingsRow.appendChild(availableHeading);

fetch(`http://www.rimone.online:3000/api/chargers/`, {
  method: "GET",
  headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
})
  .then((response) => response.json())
  .then((chargers) => {
    console.log(chargers);

    chargers.forEach((charger) => {
      const row = document.createElement("tr");
      table.appendChild(row);

      const idCell = document.createElement("td");
      idCell.innerText = charger.id;
      row.appendChild(idCell);

      const nameCell = document.createElement("td");
      nameCell.innerText = charger.name;
      row.appendChild(nameCell);

      const powerRating = document.createElement("td");
      powerRating.innerText = charger.powerRating;
      row.appendChild(powerRating);

      const latitudeCell = document.createElement("td");
      latitudeCell.innerText = charger.latitute;
      row.appendChild(latitudeCell);

      const longitude = document.createElement("td");
      longitude.innerText = charger.longitute;
      row.appendChild(longitude);

      const pricePerUnit = document.createElement("td");
      pricePerUnit.innerText = charger.pricePerUnit;
      row.appendChild(pricePerUnit);

      const pricePerMinute = document.createElement("td");
      pricePerMinute.innerText = charger.pricePerMinute;
      row.appendChild(pricePerMinute);

      const location = document.createElement("td");
      location.innerText = charger.location;
      row.appendChild(location);
      
      const socketTypeCell = document.createElement("td");
      socketTypeCell.innerText = charger.socketType;
      row.appendChild(socketTypeCell);
      
      const chargerTypeCell = document.createElement("td");
      chargerTypeCell.innerText = charger.chargerType
      row.appendChild(chargerTypeCell); 
      const availableCell = document.createElement("td");
      availableCell.innerText = charger.available;
      row.appendChild(availableCell);
    });
  })
  .catch((error) => {
    console.error(error);
  });



