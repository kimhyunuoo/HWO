/*
  if 조건문 
  조건문 예제 
*/
function isFositive(number) {
  if (number > 0) {
    return "양수!"; // 조건이 참일 경우 반환
  } else if (number < 0) {
    return "음수!"; // 조건이 거짓일 경우 반환
  } else {
    return "0";
  }
}
console.log(isFositive(1));
console.log(isFositive(10));
console.log(isFositive(-2));
console.log(isFositive(0));
