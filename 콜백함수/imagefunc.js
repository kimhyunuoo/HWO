// callback 함수 ---> image load 하기
// url http://www.gstatic.com/webp/gallery/4.jpg

const loadImage = (url, callback) => {
  // createElement ---> 객체 생성 함수
  const imagEl = document.createElement("img");
  imagEl.src = url;
  // addEventListener 이벤트 발생 / 생성 함수
  imagEl.addEventListener("load", () => {
    // setTimeout ---> 동작 지연 함수
    setTimeout(() => {
      callback(imagEl);
    }, 2000); // 2000 ---> 밀리세컨드 단위의 setTimeout의 지연 / 쉼표 구분  ex> ,2000)
  });
};

const containerEl = document.querySelector(".container");
loadImage("http://www.gstatic.com/webp/gallery/4.jpg", (imagEl) => {
  containerEl.innerHTML = "";
  // append method ---> 만들어놓은 변수에다가 밀어 넣는 함수
  containerEl.append(imagEl);
});
