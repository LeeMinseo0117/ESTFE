const button = document.getElementById("btn");
button.addEventListener("click", function () {
  console.log(this);
});
// 버튼 객체에서 this를 소환했기에 <button id="btn">Click me!</button> 출력
