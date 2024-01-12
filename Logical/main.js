/*
  논리연산자 
*/

const a = true;
const b = true;

// AND 연산자 ---> &&
// false 만나는 순간 무조건 해당 열은 멈춘다.
// 둘다 true 여야지 실행 !
if (a && b) {
  console.log("모두가 참 !!");
}

// OR 연산자 ---> ||
// 둘 중에 하나 이상이 참이면 실행
if (a || b) {
  console.log("하나 이상이 참 !!");
}
// 주의 해야 할 부분 !
