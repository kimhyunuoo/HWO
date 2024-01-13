/*
  for - in 반복문 사용하기
*/
// 객체 데이터는 순서를 보장하지 않는다.
const user = {
  name: "kim",
  age: 85,
  inValid: true,
  email: "abcdefghijklmnop@abc.com",
};
for (const key in user) {
  console.log(key);
  console.log(user[key]);
}
