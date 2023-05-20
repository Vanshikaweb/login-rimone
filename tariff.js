fetch("http://dev.rimone.online:3000/api/charging-station/tariff", {
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
  .then((tariffs) => {
    if (!Array.isArray(tariffs)) {
      throw new Error("Chargers data is not an array");
    }
    console.log(tariffs);

    const tbody = document.getElementById("tariff-data");

    tariffs.forEach((tariff) => {
      const row = `
        <tr>
          <td>${tariff.location}</td>
          <td>${tariff.charger}</td>
          <td>${tariff.connector}</td>
          <td>${tariff.name}</td>
          <td>${tariff.type}</td>
          <td>${tariff.currency}</td>
          <td>${tariff.timeIntervalPricing}</td>
          <td>${tariff.timeInterval}</td>
          <td>${tariff.sessionTime}</td>
          <td>${tariff.penalty}</td>
          <td>${tariff.basicPrice}</td>
          <td>${tariff.bpGstPercent}</td>
          <td>${tariff.parkingChargesApplicable}</td>
          <td>${tariff.parkingChargesType}</td>
          <td>${tariff.parkingCharges}</td>
          <td>${tariff.pcGstPercent}</td>
          <td>${tariff.serviceChargesApplicable}</td>
          <td>${tariff.serviceChargesType}</td>
          <td>${tariff.serviceCharges}</td>
          <td>${tariff.scGstPercent}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch((error) => {
    console.error(error);
  });
