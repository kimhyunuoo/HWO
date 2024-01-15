// 화살표 함수 ---> arrow function

//기본적인 함수
// function sum() {}
// 함수의 표현식과 유사하다.
// const sum = function() {}
// const sum(x, y) => {x + y}

// function sum(a, b) {
//   return a + b
// }
//위에 함수를 화살표 함수로 재구성
const isNumber = (a, b) => a + b;

console.log(isNumber(1, 2));
console.log(isNumber(10, 20));
