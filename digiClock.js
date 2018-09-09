function clock() {
  var now = new Date();
  var TwentyFourHour = now.getHours();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var mid = "pm";

  //appending 0 if less than 10
  if (min < 10) {
    min = "0" + min;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  //12 hour formatting
  if (hour < 12) {
    hour = hour - 12;
  }
  if (hour == 0) {
    hour = 12;
  }

  if (TwentyFourHour < 12) {
    mid = "am";
  }

  setTimeout(clock, 1000);

  document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec + mid;
}
