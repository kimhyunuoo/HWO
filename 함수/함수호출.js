// 함수 호출 스케쥴링

//setTimeout 사용
setTimeout(() => {
  console.log("good");
}, 5000);
//setTimeout 사용 2
const hello = () => {
  console.log("hello");
};
setTimeout(hello, 2000);

// 배운 용어 정리
/*
  setTimeout ---> 함수 호출
  clearTimeout ---> 함수 호출 종료
  setinterval ---> 함수를 반복 
  clearinterval ---> 반복 함수 종료
*/
