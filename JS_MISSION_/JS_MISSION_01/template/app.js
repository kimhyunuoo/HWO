// // do something!
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const nav = document.querySelector("nav");
  const main = document.querySelector("main");
  const toggleButton = document.querySelector(".toggle");
  // toggle 버튼을 클릭했을때 open ~ close에 대한 변화 로직
  toggleButton.addEventListener("click", function () {
    nav.classList.toggle("active");
    const isNavActive = nav.classList.contains("active");
    // 버튼 클릭 및 재 클릭으로 이동 방향
    if (isNavActive) {
      main.style.transform = "translate3d(300px, 0, 0)";
      toggleButton.style.transform = "rotate(180deg)";
    } else {
      main.style.transform = "translate3d(0, 0, 0)";
      toggleButton.style.transform = "rotate(0deg)";
    }
  });

  setTimeout(function () {
    body.classList.remove("preload");
  }, 500);
});
