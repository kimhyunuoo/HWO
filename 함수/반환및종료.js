// 함수의 반환 및 종료

function hello() {
  //함수의 동작 반환 / return 키워드 밑 부분의 코드는 동작 x
  return;
}
console.log(hello());

// 함수반환 및 종료에 대한 예제
function plus(num) {
  if (typeof num !== "number") {
    console.log("숫자를 입력해 주세요!");
    return 0;
  }
  return num + 1;
}
console.log(plus(5));
console.log(plus(2));
console.log(plus());
