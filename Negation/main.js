//부정 연산자 (Negation)
// 부정 ---> !
// 해당 데이터의 반대 데이터 출력
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);

// 부정반복연산자
console.log(!!0); // false -> true -> false

// 비교 연산자 (Comparison)
// javascript 에서 비교 연산자를 적극 활용 !!!
const a = 1;
const b = 3;
//동등
console.log(a == b);
//부등연산자
console.log(a != b);
//일치
console.log(a === b);
console.log(a !== b);

//비교
//큼
console.log(a > b);
//작음
console.log(a < b);
// 크거나 같음
console.log(a >= b);
// 작거나 같음
console.log(a <= b);
