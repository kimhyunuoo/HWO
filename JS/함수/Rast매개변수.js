// 매개변수
// 나머지 매개변수에 대한 설명

// 매개변수 인자로 몇개가 들어올지 모르는 상황에서 사용되는
// 나머지 매개변수 사용법
// 전개 연산자를 사용해서 모든 인자를 배열로 받는다.
//
function sum(...rest) {
  console.log(rest);
  //유사 배열 ---> array-like
  console.log(arguments);
  return rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
