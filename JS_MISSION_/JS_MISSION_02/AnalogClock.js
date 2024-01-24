const AnalogClock = ($container) => {
  // do something!
  const hourHands = document.createElement("div");
  const minuteHands = document.createElement("div");
  const secondHands = document.createElement("div");

  // 시, 분, 초 침에 CSS 클래스 추가
  hourHands.classList.add("hand", "hour");
  minuteHands.classList.add("hand", "minute");
  secondHands.classList.add("hand", "second");

  // 시침, 분침, 초침을 컨테이너에 추가
  $container.appendChild(hourHands);
  $container.appendChild(minuteHands);
  $container.appendChild(secondHands);

  // 시계 업데이트 함수 만들기
  const updateClock = () => {
    //현재 시간을 생성자 함수로 생성
    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // 시계 바늘 각도 계산 및 적용
    const degHour = (hour % 12) * (360 / 12) + minute * (360 / 12 / 60);
    const degMinute = minute * (360 / 60);
    const degSecond = second * (360 / 60);

    hourHands.style.transform = `rotate(${degHour}deg)`;
    minuteHands.style.transform = `rotate(${degMinute}deg)`;
    secondHands.style.transform = `rotate(${degSecond}deg)`;
  };
  updateClock();

  setInterval(updateClock, 1000);
};

export default AnalogClock;
