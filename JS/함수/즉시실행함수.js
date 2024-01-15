// 즉시 실행 함수 (IIFE)

const a = 7;
const double = () => {
  console.log(a * 2);
};
double();
(() => {
  console.log(a * 2);
})();

// 즉시실행함수 사용 패턴
(() => {})(); //(f)()
(function () {})(); //(f)()
(function () {})(); // (f())
!(function () {})(); // !f ()
+(function () {})(); //+f ()

// 즉시 실행 함수 예제
((a, b) => {
  console.log(a.innerWidth);
  console.log(b.body);
})(window, document);
