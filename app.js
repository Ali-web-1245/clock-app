function updateClock(){
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = "AM";

  if(hours >= 12){
    ampm = "PM";
    if(hours > 12) hours -= 12;
  }

  if(hours === 0) hours = 12;

  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2,"0");

  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("ampm").innerText = ampm;
}

setInterval(updateClock,1000);
updateClock();