// while 문
//조건이 참이면, 반복하는 단순한 조건문

//기본적인
//무한 반복이 될 수 있기 때문에 거짓이 될 수 있는 조건이 항상 존재
//while 문의 순서 :  조건을 보고 실행
// 조건이 거짓이면 실행 자체를 하지 않는다.
let n = 0;
while (n < 4) {
  console.log(n);
  n++;
}
for (let a = 0; a < 4; a++) {
  console.log(a);
}

//Do-while 조건문
//Do-while 조건문 순서 : 실행을 먼저 시킨 후 조건을 확인
// 조건이 거짓이라도 최초 1회는 실행을 시킨다.

// let b = 0;
// while(b) {

// }
let b = 0;
do {
  console.log(b);
  b++;
} while (b < 4);
