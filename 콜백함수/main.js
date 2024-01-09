/*
callback function란 ? 
다른 함수의 매개변수로 전달 되어 수행 되어 지는 함수
higher-order-function이란?
매개 변수를 통해 함수를 받아서 호출하는 함수
*/
function callback_func() {
  console.log(`I'm callback function`);
}
function higher_order_func(callback) {
  console.log(`I"m higher-order function`);
  callback();
}
higher_order_func(callback_func);

//콜백함수 실습 예제

//callback 되어질 function
//add ---> callback
// function 를 매개 변수로 받아서 사용 !
function add(x, y) {
  return x + y;
}
// usb ---> callback
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}
// 실제 실행 되어질 고차 함수 ---> higher order function
function calculator(callback, x, y) {
  return callback(x, y);
}
//출력할때 함수만 달라져서 사용 할 수 있다.
console.log(calculator(add, 2, 5));
console.log(calculator(sub, 10, 5));
console.log(calculator(mul, 10, 5));
console.log(calculator(div, 10, 5));

/* 
  call by value 
  값에 의한 복사로 함수 내에서 매개 변수 값을 변경 시켜도 영향이 미치지 않음
  원시 타입을 매개 변수로 넘겼을 때 발생
*/
let a = 1;
let add = function (b) {
  b = b + 1;
};
add(a);
console.log(a);
console.log(b);

/*
  call by reference
  주소에 대한 복사로 함수 내에서 매게 변수 내 값을 변경시키면 원본에도 영향을 받는다.
  객체 타입을 매개 변수로 넘겼을때 발생
*/
var x = { v: 1 };
var add = function (b) {
  b.v = b.v + 1;
};
add(x);
console.log(x.v);
