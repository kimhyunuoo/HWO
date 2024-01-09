//함수 표현식 리마인드

//함수 선언식
function add_1(x, y) {
  return x + y;
}
console.log(add_1(1, 3));

//함수 표현식
let add_2 = function (x, y) {
  return x + y;
};
console.log(add_2(1, 3));

//화살표 함수
let add_3 = (x, y) => x * y;
console.log(add_3(1, 4));

let add_4 = add_1;
console.log(add_4(3, 2));
