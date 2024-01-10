/*
  String 
  텍스트 길이와 상관 없이 문자열 형태로 저장되는 자료형 
  string method 
  - String.length ---> 문자열 길이
  - String.charAt(index) / String.charCodeAt(index)
  - String.
  - String.
  - String.
  - String.
*/
//문자열 정의 실습
let str = "hello";
console.log(str);

// \r ---> 콘솔 출력시 계행 (캐리지 리턴)
console.log("line\rfeed");
// \t ---> 콘솔 출력시 tap (캐리지 탭)
console.log("line\tfeed");

//String.lenght ---> 문자열의 길이 확인
let str_1 = "hello\nworld\n!!!!!!!!";
console.log(str_1.length);

// 문자열 접근 방법
let str_2 = "Hello World !!!";
// 각 문자열의 index 값으로 접근
console.log(str_2.charAt(1));
console.log(str_2[1]);
//문자열의 아스키 코드값 확인
console.log(str_2.charCodeAt(1));
//문자열 검색
console.log(str_2.indexOf("l"));
console.log(str_2.indexOf("l", 4));
console.log(str_2.lastIndexOf("1"));

//문자열 단어 검색 ----> 전체문자열에서 있는지 없는지 확인
console.log(str_2.includes("Hello"));
//문자열 부분 단어 검색 ---> 세밀하게 검색하는 함수
console.log(str_2.startsWith("ello", 1));
console.log(str_2.endsWith("!!!"));
//문자열 대문자 반환
console.log(str_2.toUpperCase());
//문자열 소문자 반환
console.log(str_2.toLowerCase());
