//CLOCK
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateClock, 1000);

updateClock();

//DATE
const currentMonthYear = document.getElementById("currentMonthYear");
const calendarGrid = document.getElementById("calendarGrid");
const currentDate = new Date();
const currentDay = currentDate.getDate();
const daysInMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
).getDate();

function updateCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  currentMonthYear.textContent = `${new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(currentDate)} ${year}`;

  calendarGrid.innerHTML = "";

  for (let i = 1; i <= daysInMonth; i++) {
    const day = new Date(year, month, i);
    const dayOfWeek = day.getDay();

    const dayElement = document.createElement("div");
    dayElement.textContent = i;
    dayElement.classList.add("day");

    if (i === currentDay) {
      dayElement.classList.add("current-day");
    }

    calendarGrid.appendChild(dayElement);
  }
}

updateCalendar();

// FOOTER
window.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const body = document.body;

  function stickFooterToBottom() {
    const windowHeight = window.innerHeight;
    const bodyHeight = body.offsetHeight;

    if (windowHeight > bodyHeight) {
      footer.style.position = "fixed";
      footer.style.bottom = "0";
      footer.style.left = "0";
      footer.style.right = "0";
    } else {
      footer.style.position = "static";
    }
  }

  stickFooterToBottom();

  window.addEventListener("resize", stickFooterToBottom);
});
