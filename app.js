const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const cdCont = document.getElementsByClassName("countdown-container")[0];

function countDown() {
  const current = new Date();
  const end = new Date("Aug 1 2023");

  if (end - current <= 0) {
    cdCont.innerHTML = "<p class='due'>PREPARE FOR THE INTERVIEW</p>";
    return;
  } else {
    const ms = end - current;
    const seconds = Math.floor(ms / 1000);
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const sec = Math.floor(seconds) % 60;
    daysEl.innerText = timeFormat(days);
    hoursEl.innerText = timeFormat(hours);
    minutesEl.innerText = timeFormat(minutes);
    secondsEl.innerText = timeFormat(sec);

    function timeFormat(time) {
      return time < 10 ? `0${time}` : time;
    }
  }
}

countDown();

setInterval(countDown, 1000);
