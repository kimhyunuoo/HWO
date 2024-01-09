// 두 정수를 입력 받아 가장 큰 값을 출력해주는 함수 작성
//예제

//if-else ---> ture and false
function MAX(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
// 3항 연산자
function MAX(x, y) {
  return x > y ? x : y;
}
console.log(MAX(0, 3));
console.log(MAX(-1, 5));
console.log(MAX(100, 7));
