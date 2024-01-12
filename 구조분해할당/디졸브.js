/*
  구조 분해 할당
  ---> 배열데이터와 객체데이터에서 사용 가능
  ---> 디졸브 효과 
*/
const arr = [1, 2, 3];
const [a, ...rest] = arr;

console.log(a, rest);

//구조분해할당 ---> 객체데이터로 사용하는 방법
const obj = {
  a: 1,
  b: 2,
  c: 3,
  y: 100,
};
//일반적으로 꺼내쓰는 방법
const d = obj.a;
const e = obj.b;
const f = obj.c;
console.log(d, e, f);
//객체 구조분해할당
const { z = 5, b: woo, y: ten = 10 } = obj;
console.log(z, woo, ten);
