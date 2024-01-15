// javascript tpye ---> 형(type conversion)
/* 
  형 변환과 일치, 동등 연산자 상관관계
  핵심 정리 :
            동등 및 일치 연산자를 사용할 경우에 
            동등 연산자 만을 사용하게 되면 형 변환이 보여지게 되기
            떄문에 동등 연산자 보다는 일치 연산자를 통해서 사용 권장
*/
const a = 1;
const b = "1";
const c = 0;
const d = false;
// typeof를 통한 확인
console.log(typeof a);
console.log(typeof b);
//일치연산자를 통한 확인
//동등연산자 ---> 느슨한 비교
console.log(a == b);
//일치연산자 ---> 세밀한 비교
console.log(a === b);

//boolean type 비교
console.log(c == d);
console.log(c === d);
