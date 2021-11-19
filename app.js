const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

countdown();
let interval = setInterval(countdown, 1000);

function countdown() {
  let targetDate = "2021-12-16 00:00:00";
  let targetTime = new Date(targetDate);
  let currentTime = new Date().getTime();
  let remainingTime = targetTime - currentTime;

  if (remainingTime > 0) {
    let s = Math.floor(remainingTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);
  
    s %= 60;
    m %= 60;
    h %= 24;
  
    days.innerText = (d < 10) ? "0" + d : d;
    hours.innerText = (h < 10) ? "0" + h : h;
    mins.innerText = (m < 10) ? "0" + m : m;
    secs.innerText = (s < 10) ? "0" + s : s;
  }else{
    document.querySelector("#timer-title").innerText = "Happy Victory Day";
    clearInterval(interval);
  }
}