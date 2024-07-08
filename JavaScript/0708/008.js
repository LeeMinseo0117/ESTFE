// 숫자형
let num1 = 1;
let num2 = 3.2;

console.log(typeof num1, typeof num2);

console.log(0.1 + 0.2); // 0.3이 아니다
// 숫자를 저장하는 형식 때문
// 10진수의 소수를 2진수로 전환하는 과정에서 무한소수화가 되면서 오차가 발생한다.
// 반올림, 소수점을 지정하는 처리 / 라이브러리 (Decimal.js)

// 자바스크립트에서 안전하게 사용할 수 있는 숫자
console.log(Number.MAX_SAFE_INTEGER); // 가장 큰 수
console.log(Number.MIN_SAFE_INTEGER); // 가장 작은 수

console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);
console.log(9007199254740991 + 3);

// 다양한 연산
const a = 10;
const b = 3;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`); // 제곱
console.log(`${16} ** ${0.5} = ${16 ** 0.5}`); // 제곱근

// 단항연산 : 연산자와 피연산자가 1개씩
console.log(`-${a} = ${-a}`);
console.log(`-(-${a}) = ${-(-a)}`);
console.log(+"4"); // 타입을 숫자로 변환
console.log(typeof +"4");

// 증감연산
// 증가 또는 감소
let num = 3;
console.log("num++ -> ", num++);
console.log(num); // num == 4;
console.log("++num ->", ++num); // num == 5
console.log("--num ->", --num); // num == 4
console.log("num-- -> ", num--);
console.log(num); // num == 3

// 특수한 값
console.log("1/0 -> ", 1 / 0);
console.log("-1/0 -> ", -1 / 0);

// e : 10의 거듭제곱을 표현할 수 있습니다.
console.log(3e10); // 3*10^10
console.log(2e-2); // 2*10^(-2)

// NaN(Not a Number);
console.log(typeof NaN);
console.log("hello" * 2);

console.log(+`-(-10)`); // NaN