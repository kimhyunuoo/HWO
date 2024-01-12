/*
  참과 거짓 (true/truthy & false/falsthy)
  참과 거짓을 if조건문으로 확인한 결과 
  거의 대다수의 조건으로 들어가는 부분은 true인 것을 확인
  따라서, 
  조건으로 false가 되는 부분만 알고 있으면 될 것  같다.
  1. false
  2. 0 
  3. null
  4. undefined
  5. NaN
  6. "" <---- 빈 문자열
  7. 0n <---- Bigint
  */

//if조건문으로 확인하기
if (0n) {
  console.log("참");
} else {
  console.log("거짓");
}

const fruits = ["Apple", "Banana", "chery", "orange", "great"];

//아이템이 존재하는지 존재하지 않는지 출력하는 함수 작성
if (fruits.length) {
  console.log("아이템이 들어 있습니다.");
} else {
  console.log("아이템이 들어 있지 않습니다.");
}
