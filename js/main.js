const distanceInput = document.getElementById("distance-input");
const ageInput = document.getElementById("age-input");
const userName = document.getElementById("user-name");
const ticketName = document.getElementById("ticket-name");
const ticketRate = document.getElementById("ticket-rate");
const trainCarriage = document.getElementById("train-carriage");
const trainNumber = document.getElementById("train-number");
const ticketResult = document.getElementById("ticket-cost-result");
const generateClick = document.getElementById("generate-button");
const pricePerKm = 0.21;
let ticketPrice;
let discount = 0;

generateClick.addEventListener("click", function () {
  const distanceValue = parseInt(distanceInput.value);

  const userAge = ageInput.value;

  //   Stampa nome
  ticketName.innerText = userName.value;

  //   Randomizzazione carrozza
  trainCarriage.innerText = Math.floor(Math.random() * 12 + 1);

  //   Randomizzazione numero biglietto
  trainNumber.innerText = Math.floor(Math.random() * 9999 + 1000);

  if (isNaN(distanceValue)) {
    alert("I dati inseriti non sono corretti, ricarica la pagina");
  } else {
    ticketPrice = distanceValue * pricePerKm;

    if (userAge == "minorenne") {
      discount = 20;
      ticketRate.innerText = "Sconto 20%";
      const ticketDiscount = (ticketPrice * discount) / 100;
      ticketPrice -= ticketDiscount;
      ticketResult.innerText = `${ticketPrice.toFixed(2)}€`;
    } else if (userAge == "over65") {
      discount = 40;
      ticketRate.innerText = "Sconto 40%";
      const ticketDiscount = (ticketPrice * discount) / 100;
      ticketPrice -= ticketDiscount;
      ticketResult.innerText = `${ticketPrice.toFixed(2)}€`;
    } else {
      ticketRate.innerText = "Tariffa Standard";
      ticketResult.innerText = `${ticketPrice.toFixed(2)}€`;
    }
  }
});
