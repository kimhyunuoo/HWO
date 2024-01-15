//생성자 함수로 조금 쉽게 지정 !

function User(first, last) {
  (this.firstName = first), (this.lastName = last);
}
const hyun = new User("kim", "king");
const neo = new User("neo", "anderson");
console.log(hyun);
console.log(neo);
