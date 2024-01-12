/*
  구조 분해 할당
  ---> 배열데이터와 객체데이터에서 사용 가능
*/
const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

/*
  배열에 대해서 각각에 데이터로 꺼내서 사용하기 위해서는 각 데이터
  에 대해서 배열에 대한 indexing을 통해서 출력해야 하는 번거로움이 
  있다.
*/
/*
  구조분해할당을 통해 조금 더 편리하게 하는 방법
*/
// const 키워드를 통해서 배열을 만들고 arr 통해 배열을 재할당 하는식
const [a, b, c] = arr;
console.log(a, b, c);

//const 키워드 없이 할당해서 사용하는 방법
/*
  let 키워드에 각각 abc를 0으로 할당한 상태에서, const 키워드를 
  지워주면 동일하게 사용 가능하다.
*/
