const currentDate = {
    currentMonth: document.querySelector(".currentMonth"),
    currentYear: document.querySelector(".currentYear"),
  },
  daysTag = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll(".material-symbols-outlined");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let dayOfWeekLastDayOfPrevMonth = new Date(currYear, currMonth, 0).getDay();

  let difference =
    dayOfWeekLastDayOfPrevMonth !== 0 ? 7 - dayOfWeekLastDayOfPrevMonth : 0;

  let firstDateofMonth = new Date(currYear, currMonth, 1).getDay();

  firstDateofMonth = (firstDateofMonth + difference) % 7;

  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();

  let lastDayofMonth = new Date(currYear, currMonth + 1, 0).getDay();

  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  let liTag = "";

  // 첫 번째 반복문을 31일부터 시작하도록 조정
  for (let i = 31; i >= 31 - firstDateofMonth + 1; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - (31 - i)}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.currentMonth.innerText = months[currMonth];
  currentDate.currentYear.innerText = currYear;
  document.querySelector(".days").innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }

    renderCalendar();
  });
});
