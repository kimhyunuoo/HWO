/*
  method 
  객체에 저장된 값이 함수인 경우, 이를 메서드라고 부른다.
*/

//object method
let user = {
  name: "kim",
  age: 22,
  hello_func() {
    console.log("hello!");
  },
};
console.log(user);

//함수 확인하기
function hello_func() {
  console.log("hello !");
}
function hi_func() {
  console.log("hi !!");
}

let obj = {
  name: "kim",
  age: 22,
  func: hello_func,
};

hello_func();
hi_func();
obj.func();

obj.func = hi_func;
obj.func();

//  this
/*
  객체에 직접적으로 접근하기 위해서는 this라는 키워드를 통해서 
  접근한다.
*/
let obj_1 = {
  name: "john",
  age: 33,
  hello_func() {
    console.log("hello " + this.name);
  },
};
obj_1.hello_func();

// getOwnPropertyDescriptors ---> 오브젝트 내 함수에 표현 부분 확인 가능 함수
console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3));
console.log(Object.getOwnPropertyDescriptors(add_4));
