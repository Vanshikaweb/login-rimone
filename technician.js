const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const chargerId = urlParams.get("id");

const table = document.getElementById("allcharger");
const headingsRow = document.createElement("tr");
table.appendChild(headingsRow);

const idHeading = document.createElement("th");
idHeading.innerText = "ID";
headingsRow.appendChild(idHeading);

const nameHeading = document.createElement("th");
nameHeading.innerText = "Location";
headingsRow.appendChild(nameHeading);

const powerRatingHeading = document.createElement("th");
powerRatingHeading.innerText = "Charger";
headingsRow.appendChild(powerRatingHeading);

const latitudeHeading = document.createElement("th");
latitudeHeading.innerText = "Charger Logs";
headingsRow.appendChild(latitudeHeading);




fetch(`http://dev.rimone.online:3000/api/chargers/`, {
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

    });
  })
  .catch((error) => {
    console.error(error);
  });
