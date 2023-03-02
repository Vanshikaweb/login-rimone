const allusers = document.getElementById("allusers");
fetch("http://3.229.255.54:3000/api/users", {
  method: "GET",
  // body: JSON.stringify({ name:fullName,guid:userName, phone, email, password }),
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // const fresponse = await response.json();
    for (let i = 0; i < response.length; i++) {
      console.log(response[i]);
      const msg = `<h1>username: ${response[i].guid}</h1>
        <h2>name: ${response[i].name}</h2>
        <h2>phone: ${response[i].phone}</h2>
        <h2>email: ${response[i].email}</h2>`;
      var item = document.createElement("li");
      item.innerHTML = msg;
      allusers.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
      // const ele= document.createElement('li')
    }
  })
  .catch((error) => {
    console.error(error);
  });
