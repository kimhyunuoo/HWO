// this 키워드
/*
  - 일반 함수에서의 this는 호출 위치에서 정의
  - 화살표 함수에서의 this는 선언된 함수 범위에서만 정의
*/
const user = {
  firstName: "park",
  lastName: "john",
  age: 85,
  getFullName: function () {
    this.firstName;
    this.lastName;
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.getFullName());
