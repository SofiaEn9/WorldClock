function updateTime() {
  let chihuahuaElement = document.querySelector("#chihuahua");
  let chihuahuaDateElement = chihuahuaElement.querySelector(".main-date");
  let chihuahuaTimeElement = chihuahuaElement.querySelector(".main-time");
  let chihuahuaTime = moment().tz("America/Chihuahua");

  chihuahuaDateElement.innerHTML = chihuahuaTime.format("dddd, MMMM Do");
  chihuahuaTimeElement.innerHTML = chihuahuaTime.format("HH:mm");
}

updateTime();
setInterval(updateTime, 1000);
