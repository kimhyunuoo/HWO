let summery = 0;
for (let i = 1; i <= 100; i++) {
  summery += i;
}
console.log(summery);

//배열의 모든 원소를 순차적으로 적용할때 reduce() 사용
let date = [5, 4, 3, 2, 1, 2, 3, 4, 5];

let sum = date.reduce((a, b) => a + b);
console.log(sum);

//배열을 초기화 하는 방법
let arr = [8, 1, 4, 5, 7];
console.log(arr);
let arr1 = new Array(5).fill(0);
console.log();

// 특정한 원소의 등장 여부를 파악할때
let mySet = new Set();
mySet.add(8);
mySet.add(1);
mySet.add(4);
mySet.add(5);
mySet.add(7);
//길이측정
console.log(`${mySet.size}`);
//포함 여부 확인
console.log(`${mySet.has(1)}`);
console.log(typeof mySet);
for (let item of mySet) {
  console.log(item);
}
