// 산술 연산자
/*
  데이터(피연산자) / 피연산자 사이에 있는 것을 연산자 라고 한다.

*/
function plu(x, y) {
  return x + y;
}
function min(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function sup(x, y) {
  return x / y;
}
function per(x, y) {
  return x % y;
}
// 출력
console.log(plu(1, 2));
console.log(min(5, 7));
console.log(mul(3, 4));
console.log(sup(10, 2));
console.log(per(7, 5));

//짝수 만들기 함수
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven());

// 할당 연산자
let a = 12;
// 복합 할당 연산자
a += 2; // === a = a + 2
console.log(a);

// 증감 / 감소 연산자 ===> ++ / --
let b = 3;
//증감
console.log(b++);
console.log(b);
//감소
console.log(b--);
console.log(b);
