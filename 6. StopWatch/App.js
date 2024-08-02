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
    setTimeout(updateDisplay, 10);
    document.getElementById("millisecond").innerHTML = milliSec;
    document.getElementById("second").innerHTML = sec;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("hr").innerHTML = hour;
  }
}
