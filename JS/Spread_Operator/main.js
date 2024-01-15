/*
  전개 연산자 ---> [...]

*/
//전개연산자의 이해
const a = [1, 2, 3];
const b = [4, 5, 6];

//concat 배열 병합 ---> []
const c = a.concat(b);
console.log(c);

const d = [...a, ...b];
console.log(d);

//concat을 통한 객체 병합 ---> {}
const e = { x: 1, y: 2 };
const f = { y: 3, z: 4 };

const g = Object.assign({}, e, f);
console.log(g);
const h = { ...e, ...f };
console.log(h);

// 매개 변수에 대한 배열의 전개
function fn(x, y, z) {
  console.log(x, y, z);
}
// fn(1, 2, 3);

const u = [1, 2, 3];
fn(...u);
