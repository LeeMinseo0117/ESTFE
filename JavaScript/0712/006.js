function 함수1(a, b, ...c) {
  console.log(c);
  return Math.max(...c);
}

함수1("hello", "world", 10, 20, 30, 40);

function 함수2([a, b], ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);
