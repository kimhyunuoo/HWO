// function

function hello() {
  console.log("hello");
}
/* 
  call section
  ()소괄호가 작성 되지 않고 적혀 지면, 함수 덩어리가 되어진다.  
*/
hello();
// 개발자도구로 보면 위와 같은 함수로 출력하는 부분인걸 할 수 있고,
// console출력도 동일하게 함수를 소괄호로 열고 닫아야지 실행 된다는 걸 알고 있어야 한다.
console.log(hello());

// getNumber ---->
function getNumber() {
  return 123;
}
// 함수와 함수의 호출은 전혀 다르다 !
console.log(getNumber);
console.log(getNumber());

/*
  typeof keyword 사용 하여 알아보기
*/
console.log(typeof getNumber);
console.log(typeof getNumber());

const getNumber_1 = function () {
  return 123; // 반환
};
console.log(getNumber_1);
console.log(getNumber_1());

console.log(typeof getNumber_1);
console.log(typeof getNumber_1());

//새로운 예제
//매개변수 이해하기
const a = function () {
  console.log("A");
};

/*
  아래 function 로직을 작성하고, b에 인수를 넣어줘도
  b에는 내부에 어떠한 로직도 존재하지 않기 때문에, 
  출력이 되지 않는다.
  이때 ! b의 값으로 숫자 123을 넣어주지만 실제 b의 함수로직에는
  123을 받아줄 것이 없기 때문에 b의 함수에 c라는 "매개변수"를 
  만들어서 return 해서 출력
  
  b(123) ---> c라는 매개체가 되는 변수로 들어가서 내부에있는
  콘솔에 출력되는 과정
*/
const b = function (c) {
  console.log(c);
  c();
};
b(a);
