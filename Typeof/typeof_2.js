// 데이터의 타입 확인
const a = 123;
console.log(typeof a);

//각각의 타입 확인하기
console.log(typeof "hello" === "string");
console.log(typeof 123 === "number");
console.log(typeof false === "boolean");
console.log(typeof undefined === "undefined");
console.log(typeof null === "object");
console.log(typeof [] === "object");
console.log(typeof {} === "object");
console.log(typeof function () {} === "function");

// constructor 활용하여 배열과 객체 데이터 확인하기
console.log([].constructor === Array);
console.log(function () {}.constructor === Function);

/*
  Object ---> 객체 타입인 null을 확인하기 위해서 지정
  .prototype ---> typeof 와는 또 다른 객체 확인
  .toString ---> 문자열 데이터로 반환 
  .call ---> 반환된 데이터 값을 가지고 오는 
  .slice ---> 그렇게 나온 값을 자름 (시작, 끝)
*/
console.log(Object.prototype.toString.call(null).slice(8, -1) === "Null");
console.log(Object.prototype.toString.call(undefined));

//함수를 사용해서 데이터 타입 값 확인하기
function checkType(date) {
  return Object.prototype.toString.call(date).slice(8, -1);
}
console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType("hello"));
