/*
  Gatter / Setter 문법
  Gatter ---> 값을 얻는 용도의 메소드
  Setter ---> 값을 지정하는 용도의 메소드
*/

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  /* 
    getter 속성을 이용한 변환 
    getFullName()하나의 함수를 변환
    get (F -> f)ullName()으로 작성 --> get fullName() {}
  */
  get fullName() {
    console.log("getting full name!");
    return `${this.firstName} ${this.lastName}`;
  }
  /*
    setter 속성은 어떠한 값을 인수를 통해 지정
    사용은 getter와 동일 하다.
  */
  set fullName(value) {
    console.log(value);
    [this.firstName, this.lastName] = value.split(" ");
  }
}
const hyun = new User("kim", "hyun");
console.log(hyun.fullName);

// 재할당
hyun.firstName = "Neo";
console.log(hyun.fullName);

hyun.fullName = "Neo Anderson";
console.log(hyun);
