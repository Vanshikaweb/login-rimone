document.addEventListener("DOMContentLoaded", function () {
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

  function showModal() {
    const modal = document.getElementById("qr-modal");
    const closeButton = document.querySelector("#qr-modal .close");

    modal.style.display = "block";

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Close the modal when the user clicks outside of it
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  function handleQRButtonClick(event) {
    const serialId = event.target.getAttribute("data-serial");
    generateQRCode(serialId);
    showModal();
  }

  function generateQRCode(serialId) {
    const qrCodeContainer = document.getElementById("qrcode-modal");

    // Clear any previous QR code
    qrCodeContainer.innerHTML = "";

    // Create a new QR code instance
    const qrCode = new QRCode(qrCodeContainer, {
      text: serialId,
      width: 128,
      height: 128,
    });

    // Show the QR code
    qrCode.makeCode(serialId);
  }
});





