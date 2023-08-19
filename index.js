

const timerDiv = document.getElementById("timerDiv");
const time = document.getElementById("time");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const startBtn = document.getElementById("startBtn");

let hours = 0;
let mins = 0;
let secs = 0;
let isCounterOngoing = false;

startBtn.onclick = function(){
  if(isCounterOngoing)
    return false;

  isCounterOngoing = true;
  let onGoing = setInterval(() => {
    if(secs <= 58 ){
      secs += 1;
    }else{
      mins += 1;
      secs = 0;
    }
    if(mins == 58){
      hours += 1;
      mins = 0;
    }
    
    hoursStr = hours.toString();
    minsStr = mins.toString();
    secsStr = secs.toString();

    if(hoursStr.length < 2){
      hoursStr = "0" + hoursStr;
    }
    if(minsStr.length < 2){
      minsStr = "0" + minsStr;
    }
    if(secsStr.length < 2){
      secsStr = "0" + secsStr;
    }

    time.innerHTML = `${hoursStr}:${minsStr}:${secsStr}`;
  }, 1000);

  pauseBtn.onclick = function stopCount(){
    clearInterval(onGoing);
    isCounterOngoing = false;
  }

  resetBtn.onclick = function(){
    clearInterval(onGoing);
    isCounterOngoing = false;
    time.innerHTML = "00:00:00"
    hours = 0;
    mins = 0;
    secs = 0;
  }
}

