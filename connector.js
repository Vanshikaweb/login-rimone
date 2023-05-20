fetch("http://dev.rimone.online:3000/api/chargers/connector", {
  method: "GET",
  headers: { "Content-Type": "application/json", "Authorization": "Bearer c060263a-4c4c-3c3b-8475-e87f3b29e9cf" },
})
  .then((response) => response.json())
  .then((connectors) => {
    console.log(connectors);

    const tbody = document.getElementById("connector-data");

    connectors.forEach((connector) => {
      const row = `
        <tr>
          <td>${connector.name}</td>
          <td>${connector.socketType}</td>
          <td>${connector.maxPower}</td>
         
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch((error) => {
    console.error(error);
  });
