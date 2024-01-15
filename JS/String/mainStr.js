/*
  문자열의 치환
  String.replace()
  */

let text = "hello world!!";
let changed_text = "";

changed_text = text.replace("world", "earth");
// changed_text = text.replace("!!!", "???");
console.log(text);
console.log(changed_text);

console.log(text.replace("!!", "??"));

//문자열을 정규 표현식으로 같은 문자열 전부 치환하기
// 정규 표현식을 알고 있으면 강력하지만 , 그냥 이런게 있다 정도로 알고 넘어가면 될 것 같다.
//replace()
// console.log(text.replace(/l/g. "i"));
// console.log(text.replace(/l/gi. "i"));

//문자열 추출
let text_2 = "hello world !!";
//slice(start index ~ end index)---> 함수
console.log(text_2.slice(0, 5));
console.log(text_2.slice(12, 14));

//문자열 분할
let arr = "The,Fire,Fox,Rage,Dog";
result = arr.split(",");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);

let test = "hello";
result_2 = test.split("");
console.log(result_2);
console.log(result_2[0]);
console.log(result_2[1]);
console.log(result_2[2]);
console.log(result_2[3]);
console.log(result_2[4]);
