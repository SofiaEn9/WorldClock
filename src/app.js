function updateTime() {
  let chihuahuaElement = document.querySelector("#chihuahua");
  let chihuahuaDateElement = chihuahuaElement.querySelector(".main-date");
  let chihuahuaTimeElement = chihuahuaElement.querySelector(".main-time");
  let chihuahuaTime = moment().tz("America/Chihuahua");

  chihuahuaDateElement.innerHTML = chihuahuaTime.format("dddd, MMMM Do");
  chihuahuaTimeElement.innerHTML = chihuahuaTime.format("HH:mm");
}

function updateCity(event) {
  let cityTimezone = event.target.value;
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
