//for-of 반복문

const fruits = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

//배열에 대한 인덱싱을 쉽게 하는 방법 for - of \
for (const fruit of fruits) {
  console.log(fruit);
}

const users = [
  {
    name: "kim",
    age: 30,
  },
  {
    name: "heong",
    age: 31,
  },
  {
    name: "bu",
    age: 32,
  },
];
//for 반복문으로 인덱싱 하는방법
for (let a = 0; a < users.length; a++) {
  console.log(users[a].name);
}
// for - of 로 인덱싱 하는 방법
//점 표기법으로 접근 가능
for (const user of users) {
  console.log(user.name);
}
