/*
  배열 ---> array
  여러 개체 값을 순차적으로 나열한 자료 구조
  대표 속성 / 메서드 
  배열의 크기 --->  Array.length(), Array.isArray()
*/
// 배열 담기

// new Array ----> 함수를 사용하여서 배열을 만드는 방식
const fruits = new Array("Apple", "Banana", "Cherry");
console.log(fruits);
// [] ----> 대괄호를 사용하여 배열을 만드는 방식 (Array 리터럴 방식)
const arrEl = ["Apple", "Banana", "Cherry"];
console.log(arrEl);

//배열의 index 찾기 ----> 배열의 인덱싱 찾기
//인덱싱 ----> 배열의 아이템 및 요소(Elment)
//배열의 데이터를 조회 하게 되면, Zero Based Numbering
console.log(arrEl[0]);
console.log(arrEl[1]);
console.log(arrEl[2]);

//배열의 길이 찾기
//점 표기법을 사용해서 length ---> 배열안에 아이템이 총 몇개 들어있는지 확인
console.log(arrEl.length);
//배열이 얼마나 있는지 모르는 상태에서 마지막 아이템 조회
console.log(arrEl[arrEl.length - 1]);
