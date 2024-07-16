console.log("----------");

const func1 = function () {
  var a = 1;
  var b = 2;

  console.log(a + b);
};

var a = 20;

func1();

console.log("----------");
// {
//   let z = 100;
//   function sum(x) {
//     // x는 매개변수(parameter)이면서 지역변수(local val)
//     let y = 50; // y는 지역변수
//     z = z + y;
//     return x + y;
//   }
//   console.log(sum(10)); // 60
//   // 10은 전달인자(argument)
//   console.log(x); // ReferenceError: x is not defined
//   // 매개변수는 함수 몸체 내부에서만 참조 가능
//   console.log(y); // ReferenceError: y is not defined
//   // 매개변수는 함수 몸체 내부에서만 참조 가능
//   console.log(z); // 150
//   // z는 전역의, y는 함수 내의 값을 가져옴
//   // 키워드로 인해 전역, 지역이 갈리는 것은 아닌지, let, var, const 모두 테스트 해보세요.
// }

// {
//   var z = 100;
//   function sum(x) {
//     // x는 매개변수(parameter)이면서 지역변수(local val)
//     var y = 50; // y는 지역변수
//     z = z + y;
//     return x + y;
//   }
//   console.log(sum(10)); // 60
//   // 10은 전달인자(argument)
//   // console.log(x); // ReferenceError: x is not defined
//   // 매개변수는 함수 몸체 내부에서만 참조 가능
//   // console.log(y); // ReferenceError: y is not defined
//   // 매개변수는 함수 몸체 내부에서만 참조 가능
//   console.log(z); // 150
// }

// const z = 100;
// function sum(x) {
//   // x는 매개변수(parameter)이면서 지역변수(local val)
//   const y = 50; // y는 지역변수
//   z = z + y;
//   return x + y;
// }
// console.log(sum(10)); // 60
// // 10은 전달인자(argument)
// console.log(x); // ReferenceError: x is not defined
// // 매개변수는 함수 몸체 내부에서만 참조 가능
// console.log(y); // ReferenceError: y is not defined
// // 매개변수는 함수 몸체 내부에서만 참조 가능
// console.log(z); // 150

console.log("----------");

function sum(x, y, 콜백함수) {
  콜백함수(x + y);
  return x + y;
}

function documentWriter(s) {
  document.write("콜백함수", s);
  // document.write() : document에 출력
}

sum(10, 20, documentWriter);

console.log("----------");

console.log(x);
// console.log(y);
// console.log(z);

var x = 1;
let y = 2;
const z = 3;

sayHi();
function sayHi() {
  console.log("Hello, lions!");
}

console.log("----------");

// 팩토리얼은 1부터 n까지의 곱을 구하는 함수를 의미합니다.
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// factorial(5) == 5 * factorial(4) == 5 * 24 (24는 factorial(4)의결과)
// factorial(4) == 4 * factorial(3) == 4 * 6 (6은 factorial(3)의결과)
// factorial(3) == 3 * factorial(2) == 3 * 2 (2는 factorial(2)의결과)
// factorial(2) == 2 * factorial(1) == 2 * 1 (1은 factorial(1)의결과)
// factorial(1) == 1

console.log("----------");

function reverse(text) {
  if (text.length <= 1) {
    // 재귀함수 종료 조건
    return text;
  }
  return reverse(text.slice(1)) + text[0];
}

console.log(reverse("hello"));
console.log(reverse("hell"));

console.log("----------");

(function () {
  var privateVar = "이것은 private 변수입니다";

  function privateFunction() {
    console.log("이것은 private 함수입니다");
  }

  console.log(privateVar);
  privateFunction();
})();

console.log(typeof privateVar); // "undefined"
// privateFunction();  // ReferenceError

console.log("----------");

function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));
console.log(add10(2));

console.log("----------");

function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x);
  }
  return innerFunc;
}
const func = outerFunc();

console.log("----------");

console.log(func());

function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
}
console.log("----------");

var 제곱2 = 제곱(2);
var 제곱3 = 제곱(3);

console.log(제곱2(10));
console.log(제곱3(10));

console.log("----------");

// 함수 내부에서 정의된 중첩 함수
const x = 100;

function a() {
  const x = 1;
  b();
}

function b() {
  console.log(x);
}

a(); // 100
b(); // 100

// 함수 내부에서 정의된 중첩 함수가 아닐 경우

const x = 1;

function outerFunc() {
  const x = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x);
}

outerFunc();

//
const xx = 100;

function a() {
  const xx = 1;
  function b() {
    console.log(xx);
  }
  b();
}

a();
