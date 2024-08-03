let milliSec = 0;
let sec = 0;
let minute = 0;
let hour = 0;

let timer = false;

function start() {
  timer = true;
  updateDisplay();
}

function stop(){
    timer = false;
    updateDisplay();
}

function reset(){
    location.reload();
}

function updateDisplay() {
  if (timer == true) {
    //milliSec = milliSec + 1;// This also will be fine
    milliSec++;

    if (milliSec == 100) {
    //   sec = sec + 1; 
      sec++;
      milliSec = 0;
    }

    if (sec == 60) {
    //   minute = minute + 1;
    minute++;
      sec = 0;
    }

    if (minute == 60) {
      //hour = hour + 1;
      hour++;
      minute = 0;
    }

    let getSec = sec;
    let getMin = minute;
    let getHour = hour;

    if(sec < 10){
      getSec = "0" + sec;
    }

    if(minute < 10){
      getMin = "0" + minute;
    }

    if(hour < 10){
      getHour = "0" + hour;
    }

    setTimeout(updateDisplay, 10);
    document.getElementById("millisecond").innerHTML = milliSec;
    document.getElementById("second").innerHTML = getSec;
    document.getElementById("minute").innerHTML = getMin;
    document.getElementById("hr").innerHTML = getHour;
  }
}
