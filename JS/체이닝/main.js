// 선택적 체이닝 ---> ?. <----
// null /undefined 는 점표기법을 사용할 수 없다.
// const user = undefined
//에러를 발생시키지 않고, 보여주게 된다.
// console.log(user?.name);

//예제 1
const userA = {
  name: "kim",
  age: 33,
  address: {
    country: "korea",
    city: "seoul",
  },
};
const userB = {
  name: "Neo",
  age: 24,
};

function getCity(user) {
  return user.address?.city;
}
console.log(getCity(userA));
console.log(getCity(userB));
