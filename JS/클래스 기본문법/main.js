//ES6 CLASS 기본 문법

// //파스칼 케이스로 작성
// // 함수의 this를 이용해서 매개변수 작성
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// //프로토타입을 이용한 생성
// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// class 문법으로 작성  ---> 추천 / 기존 prototype 함수내재
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 그 작성한 매개 변수에 생성자 함수를 통해 인수 부여
const hyun = new User("kim", "hyun");
const neo = new User("neo", "anderson");

// 출력 ---> 생성자 함수 변수 입력
console.log(hyun);
console.log(neo);
//프로토타입 이용 출력
console.log(hyun);
console.log(neo.getFullName());
