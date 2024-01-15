// 재귀 함수

// 함수 자기 자신의 영역 내부에서 재 호출 되는 것이 재귀 함수
/*
  재귀 함수 호출을 하려면,
  일단 함수를 초기화 한 후에, 함수 내부에서 증감 / if조건을 통한 
  함수 호출
  재귀 함수를 사용 할때는 멈출 수 있는 조건을 항상 넣어야 한다.
*/
let i = 0;
const a = () => {
  console.log("A");
  i++;
  if (i < 4) {
    a();
  }
};
a();

//재귀 함수 응용예제
const userA = { name: "A", parent: null };
const userB = { name: "B", parent: "userA" };
const userC = { name: "C", parent: "userB" };
const userD = { name: "D", parent: "userC" };

const getRootUser = (user) => {
  if (user.parent) {
    return getRootUser(user.parent);
  }
  return user;
};
console.log(getRootUser(userD));
