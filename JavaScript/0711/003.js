// 반복문 퀴즈

// 1. 1부터 100까지 짝수의 합을 구하는 반복문 코드

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(sum);

// 2. 반의 평균을 구하는 반복문 코드 (reduce 사용 X)

const score = [84, 92, 39, 55, 71];
let result = 0;

for (let i = 0; i < score.length; i++) {
  result += score[i];
}
console.log((result = result / score.length));
