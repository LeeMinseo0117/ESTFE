// 이때 setTimeout내의 함수에서 num을 사용하고싶다면?
// setTimeout에서 function의 this가 window인 이유는?

const obj = {
  num: 1,
  func() {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};

console.log(obj.func());
