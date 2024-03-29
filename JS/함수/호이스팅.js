// 호이스팅 ~~~~> 끌어올려지다.
// 함수 선언부가 유효범위 최 상단으로 끌어올려지는 현상 !

//호이스팅에 관한 예시
/*
  함수 선언에서 호이스팅이 발생 
  함수가 선언되어져 있는 그 해당 코드를 선언된 부분 내 
  유효 범위 안에 제일 꼭대기로 끌어 올려서 동작하는 개념
  호이스팅은 함수 선언에서만 발생하고,
  함수의 표현에서는 발생하지 않음 ---> 레퍼런스 error
*/
hello();
// 함수선언
function hello() {
  console.log("안녕하세요~");
}

//함수표현  ----> ReferenceError
const hello = function () {
  console.log("안녕하세요 !");
};
hello();
