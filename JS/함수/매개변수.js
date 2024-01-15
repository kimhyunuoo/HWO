// 매개변수

// 매개 변수의 기본 구조 / 매개변수에 기본값 지정 하기
function sum(a, b = 5) {
  return a + b;
}
console.log(sum(1, 3));
console.log(sum(7));

//매개 변수 패턴 ---> 객체(Object) 구조분해할당
const user = {
  name: "kim",
  age: 85,
  email: "asdf@gmail.com",
};
function getName({ name }) {
  return name;
}
function getEmail({ email = "이메일이 없네요 !" }) {
  return email;
}
console.log(getName(user));
console.log(getEmail(user));

//매개 변수 패턴 ---> 배열(Array) 구조분해할당
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5, 6, 7];
function getSecondItem([, e]) {
  return e;
}
console.log(getSecondItem(fruits));
console.log(getSecondItem(numbers));
