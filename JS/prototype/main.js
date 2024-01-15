// prototpye --> 프로토타입

//배열에 관련된 프로토타입 및 메서드 ,인스턴스
//const fruits = [] ---<> 배열의 리터럴 방식
const fruits = new Array("apple", "banana", "cherry");
// 생성자 함수를 통한 배열 정의 방식
console.log(fruits);
console.log(fruits.length);
//length ---> 배열데이터의 길이를 확인
console.log(fruits.includes("apple"));
//includes ---> 배열데이터에 어떤 특정한 아이템이 들어있는지를 확인 하는 용도의 메서드

//Array.prototype. <---을 통해 메서드를 등록하는 방법
Array.prototype.hyunwoo = function () {
  console.log(this);
};
fruits.hyunwoo();
const arr = [];
arr.hyunwoo();

//객체에 관련된 프로토타입 및 메서드 ,인스턴스

const hyun = {
  firstName: "kim",
  lastName: "king",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const neo = {
  firstName: "Neo",
  lastName: "Anderson",
};

//함수는 한번만 만들어서 재활용 하는 것이 좋다.
//중복되면 비효율적 !
// call 함수
console.log(hyun.getFullName());
console.log(hyun.getFullName.call(neo));
