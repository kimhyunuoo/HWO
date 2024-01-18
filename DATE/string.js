// string method
// length 문자의 길이 확인
let str = "hello world!";
console.log(str.length);

//includes() 문자 포함 여부 확인 true / false
console.log(str.includes("hello", 1));

/*
  indexof
  대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스를 반환한다.
  일치하는 문자가 없으면 -1 을 반환한다.
*/
console.log(str.indexOf("world"));

/*
  padEnd()
  대상 문자의 길이가 지정된 길이보다 작으면, 
  주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환한다.
*/
console.log(str.padEnd(21, " hyun jin"));
console.log(str);

/*
  padStart()
  대상 문자의 길이가 지정된 길이보다 작으면, 
  주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환한다.
*/
console.log(str.padStart(14, "!"));
console.log(str);
