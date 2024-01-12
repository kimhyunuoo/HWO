/*
  nullish 병합 연산 ?
  단순한 데이터가 아닌 유효한 데이터 값으로도 사용이 가능하게
*/
//이해를 돕기 위한 예제

//OR 연산자를 사용한 경우
// 왼쪽에서 오른쪽으로 해석해서 참을 찾음
const n = 0;
const num1 = n || 7;
console.log(num1);

//NULLISH 병합을 사용한 경우 ---> ??기호 사용
// null, undefined 만 건너뛰고, 나머지 모든 데이터는 먼저 반환한다.
const num2 = n ?? 7;
console.log(num2);

// 삼항 연산자 ----> console.log(a < 2 ? '참' : '거짓')
const a = 5;
// if (a < 2) {
//   console.log('참  !');
// } else {
//   console.log("거짓 ...")
// }
console.log(a < 2 ? "참" : "거짓");

//삼항 연산자 예제
function getAlert(massage) {
  return massage ? massage : "메세지가 존재하지 않습니다.";
}
getAlert("안녕하세요 !");
console.log(getAlert(""));
