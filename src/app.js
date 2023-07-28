function updateTime() {
  let chihuahuaElement = document.querySelector("#chihuahua");
  let chihuahuaDateElement = chihuahuaElement.querySelector(".main-date");
  let chihuahuaTimeElement = chihuahuaElement.querySelector(".main-time");
  let chihuahuaAmElement = chihuahuaElement.querySelector(".main-am-pm");
  let chihuahuaTime = moment().tz("America/Chihuahua");

  chihuahuaDateElement.innerHTML = chihuahuaTime.format("dddd, MMMM Do");
  chihuahuaTimeElement.innerHTML = chihuahuaTime.format("HH:mm");
  chihuahuaAmElement.innerHTML = chihuahuaTime.format("A");
  console.log(chihuahuaElement);
}

updateTime();
setInterval(updateTime, 1000);
