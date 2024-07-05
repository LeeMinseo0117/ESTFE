// 변수 키워드 별 특징
// var, let, const

// "use strict";
// -> 엄격모드

a = 10; //키워드 없이 선언 + 할당 가능
// var a = 10; 과 동일
console.log(a);

// 재선언
var name = "민서";
console.log(name);
var name = "밍더";
console.log(name);

// 재선언
let name2 = "민서";
// let name2 = '밍더';
// let, const는 재선언 불가, var는 재선언 가능

// 재할당
var x = 10;
x = 20;

let y = 30;
y = 40;

const z = 50;
// z = 60;

// let, var 재할당 가능, const 재할당 불가능
