fetch("http://dev.rimone.online:3000/api/users", {
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
  .then((users) => {
    if (!Array.isArray(users)) {
      throw new Error("Chargers data is not an array");
    }
    console.log(users);

    const tbody = document.getElementById("user-data");

    users.forEach((user) => {
      const row = `
        <tr>
        <td>${user.userType}</td>
          <td>${user.name}</td>
          <td>${user.phone}</td>
          <td>${user.email}</td>
          <td>${user.city}</td>
          <td>${user.state}</td>
          <td>${user.pincode}</td>
         
         
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch((error) => {
    console.error(error);
  });
