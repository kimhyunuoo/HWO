/*
  JS Objscet ---> 객체 데이터
  key : value = (속성 : 값) 형태로 작성되어서 보여진다.
  객체 데이터에서 속성의 이름(=KEY) 값은 고유하다 .
*/

// 객체 데이터 생성 방법
// object ---> 생성자 함수 사용해서 데이터 생성
const user = new Object();
user.name = "kim";
user.age = 32;
user.job = "dev";
console.log(user);

//this 함수를 사용해서 객체 데이터 생성
//재귀 함수를 사용하여 객체 데이터 생성
function User_1() {
  this.name = "kim";
  this.age = 32;
  this.job = "dev";
}
const user_1 = new User_1();
console.log(user_1);

// 객체 데이터를 객체 리터럴 방식으로 데이터 생성
// 대부분의 경우 리터럴 방식을 선호
const user_2 = {
  name: "kim",
  age: 32,
  job: "dev",
};
console.log(user_2);
//리터럴 방식의 속성 조회 ---> 점 표기법
console.log(user_2.name);
//리터럴 방식의 속성 조회 ---> 대괄호 표기법
console.log(user_2["name"]);
//리터럴 방식으로 키 값 호출
console.log(user_2.age);
console.log(user_2["age"]);

/*
  객체 데이터의 점표기법과 대괄호 표기법의 차이
  변수를 어떠한 키 값에 담아서 사용할 때 ---> 대괄호 표기법 사용
  점 표기법은 단순하기는 하지만, 어떠한 변수를 채워 넣을 수가 없다.
*/
//예시
const key = "age";
console.log(user_2[key]);
console.log(user_2.key);

/*
  객체 데이터 안에서 중복 된 KEY값을 사용하게 된다면 나중에 써진 값이
  더 우선시 되기 때문에 덮어 써지는 것을 확인 할 수 있다.
  키는 고유하고 , 키는 순서가 따로 존재하지 않기 때문에 먼저 작성 되었다고
  우선시 되지 않는다. !!
*/
const user_3 = {
  name: "kim",
  age: 32,
  job: "dev",
  age: 22,
};
console.log(user_3);

// 복잡한 객체 값 생성 & 응용
// 객체데이터 안에 객체데이터 넣는 방법
const userA = {
  name: "john",
  age: 22,
  job: "dev",
};
const userB = {
  name: "Neo",
  age: 22,
  parent: userA,
};
console.log(userB.parent.name);
console.log(userB["parent"].name);

// 복수의 객체 데이터를 배열로 만들어서 반환하는 방법
// 복수의 객체 데이터 또한 indexing이 되어서, console에 출력이 가능하다.
const users = [userA, userB];
console.log(users[1].name);
