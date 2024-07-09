// 숫자형 메서드

console.log("---- parseInt ----");

console.log(parseInt("36"));
// 36
console.log(typeof parseInt("36"));
// number
console.log(parseInt("36px"));
// 숫자 부분만 가져와서 출력
console.log(parseInt("width: 25px"));
// 숫자로 시작해야만 가능
// NaN 출력

console.log("---- parseFloat ----");

console.log(parseFloat("12.5px"));
// 12.5
console.log(parseFloat("12.5.6px"));
// 소수점 뒤 소수점은 문자열로 인식하여 출력 X

console.log("---- Number.isInteger ----");

console.log(Number.isInteger(0));
// true
console.log(Number.isInteger(1));
// true
console.log(Number.isInteger(0.1));
// false

console.log("---- Number.isFinite() ----")

console.log(Number.isFinite("ABC"));
// false
console.log(Number.isFinite("123"));
// false
console.log(Number.isFinite(123));
// true

console.log("---- isFinite() ----")

console.log(isFinite("ABC"));
// false
console.log(isFinite("123"));
// true
console.log(isFinite(123));
// true

console.log("---- Number.isNaN ----");

console.log(Number.isNaN(23));
// false
console.log(Number.isNaN(undefined));
// false
console.log(Number.isNaN("2345"));
// false
console.log(Number.isNaN("Hello"));
// false
console.log(Number.isNaN(NaN));
// true
console.log(Number.isNaN("Hello" * 3));
// "Hello" * 3 -> "Hello"를 숫자형으로 변환 -> NaN
// 형변환X, 숫자형 NaN일 경우에만 true 반환

console.log("---- isNaN ----");

console.log(isNaN(23));
// false
console.log(isNaN(undefined));
// isNaN : 자동으로 숫자로 변환하여 확인
// undefined를 숫자로 변환하면 NaN
// true
console.log(isNaN("2345"));
// false
console.log(isNaN("Hello"));
// true

console.log("---- toFixed ----");

const pi = 3.1415626;

console.log(pi.toFixed(2));
// 소수점 아래 두자리수 출력
console.log(pi.toFixed(10));
console.log(typeof pi.toFixed(10));
// toFixed 사용시 문자열로 출력
console.log(pi.toFixed());
// 인자가 비어있을 시 정수 부분만 출력