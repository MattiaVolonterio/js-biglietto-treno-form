const distanceInput = document.getElementById("distance-input");
const ageInput = document.getElementById("age-input");
const userName = document.getElementById("user-name");
const generateClick = document.getElementById("generate-button");
const pricePerKm = 0.21;
let ticketPrice;
let discount = 0;

generateClick.addEventListener("click", function () {
  const distanceValue = parseInt(distanceInput.value);
  console.log(`La distanza da percorrere è ${distanceValue} km`);

  const userAge = ageInput.value;
  console.log(`La selezione dell'utente è ${userAge}`);

  if (isNaN(distanceValue)) {
    alert("I dati inseriti non sono corretti, ricarica la pagina");
  } else {
    ticketPrice = distanceValue * pricePerKm;
    console.log(`Il prezzo base del biglietto è ${ticketPrice.toFixed(2)} €`);

    if (userAge == "minorenne") {
      discount = 20;
      const ticketDiscount = (ticketPrice * discount) / 100;
      console.log(`Lo sconto è pari a: ${ticketDiscount} €`);
      ticketPrice -= ticketDiscount;
      console.log(`Il prezzo base del biglietto è ${ticketPrice.toFixed(2)} €`);
    } else if (userAge == "over65") {
      discount = 40;
      const ticketDiscount = (ticketPrice * discount) / 100;
      console.log(`Lo sconto è pari a: ${ticketDiscount} €`);
      ticketPrice -= ticketDiscount;
      console.log(`Il prezzo base del biglietto è ${ticketPrice.toFixed(2)} €`);
    } else {
      console.log(`Il prezzo base del biglietto è ${ticketPrice.toFixed(2)} €`);
    }
  }
});
