function updateTime() {
  let chihuahuaElement = document.querySelector("#chihuahua");
  let chihuahuaDateElement = chihuahuaElement.querySelector(".main-date");
  let chihuahuaTimeElement = chihuahuaElement.querySelector(".main-time");
  let chihuahuaTimezone = moment().tz("America/Chihuahua");

  chihuahuaDateElement.innerHTML = chihuahuaTimezone.format("dddd, MMMM Do");
  chihuahuaTimeElement.innerHTML = chihuahuaTimezone.format("HH:mm");

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do");
  newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("dddd, MMMM Do");
  parisTimeElement.innerHTML = parisTime.format("HH:mm");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Do");
  tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm");
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone === moment.tz.guess();
  }
  cityName = cityTimezone.replace("_", " ").split("/")[1];
  cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="searchedCity">
    <div class="city">${cityName}</div>
    <div class="time">${cityTime.format("HH:mm")}</div>
    <div class="date">${cityTime.format("dddd, MMMM Do")}</div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
