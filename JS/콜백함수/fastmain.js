// 자바스크립트에 callback 함수
/*
  callback 함수의 개념 
  함수가 실행될때, 인수로 들어가는 또 하나의 함수를 
  ---> callback
*/
const a = (callback) => {
  console.log("A");
  callback();
};
const b = () => {
  console.log("B");
};

/* 
  a라는 함수가 호출될때 , b라는 함수가 인수로 들어가게 되고,
  callback이라는 함수가 먼저 b라는 함수를 받아서 출력 !
*/
a(b);

//다른 예제
//setTimeout 함수 호출 지연
const sum = (a, b, c) => {
  setTimeout(() => {
    c(a + b);
  }, 1000);
};

sum(1, 2, (value) => {
  console.log(value);
});
sum(3, 7, (value) => {
  console.log(value);
});
