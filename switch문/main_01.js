// switch 문
// 예제로 이해하기
// 변수 p에 할당하여서 조건에 맞는 값을 꺼내는 방법
function price(fruit) {
  // let p
  // switch(fruit) {
  //   case 'apple' :
  //     p = 1000
  //     break;
  //   case 'banana' :
  //     p = 2000
  //     break;
  //   case 'cherry' :
  //     p = 3000
  //   break;

  // default :
  //   p = 0
  // }
  // return p

  //switch ----> if else 문으로 변경하기
  if (fruit === "apple") {
    return 1000;
  } else if (fruit === "banana") {
    return 2000;
  } else if (fruit === "cherry") {
    return 3000;
  } else {
    return 0;
  }
}
console.log(price("apple"));
console.log(price("banana"));
console.log(price("cherry"));
console.log(price("good"));

// 변수에 값을 할당 하는게 아닌 바로바로 찾는 방법
function toy(kids) {
  switch (kids) {
    case "Doll":
      return "이것은 인형입니다.";
    case "airplane":
      return "이것은 비행기입니다.";
    case "robot":
      return "이것은 로보트 입니다.";

    default:
      return "이것은 장난감이 아닙니다.";
  }
}
console.log(toy("Doll"));
console.log(toy("airplane"));
console.log(toy("robot"));
console.log(toy(""));
