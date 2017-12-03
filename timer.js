"use strict";

showClock();
setInterval("showClock()", 1000);

function showClock() {
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();
    document.getElementById("currentTime").innerHTML = localDate + "<br />" + localTime;

}
