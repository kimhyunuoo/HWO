/* 
for 반복문
*/
//기본적인 구조
// for (초기화; 조건; 증감) {
//   // 반복 실행할 코드
// };

//for 반복문 이해하기
//증가
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 감소
for (let a = 9; a > -1; a--) {
  console.log(a);
}
// for 감소 ---> if조건문에 break 묶기
for (let b = 9; b > -1; b--) {
  if (b < 4) {
    break;
  }
  console.log(b);
}
// for 감소 ---> if조건문에 continue 묶기
/*
  continue 키워드는 
  조건에 해당하면 발동해서, 아래 내용을 무시한다.
  하지만, 조건에 해당하지 않으면, 
  continue 키워드가 작동하지 않으면서
  아래 콘솔에 출력 되게 된다.
*/
for (let c = 9; c > -1; c--) {
  if (c % 2 === 0) {
    continue;
  }
  console.log(c);
}
