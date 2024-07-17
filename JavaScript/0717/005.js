const $button1 = document.querySelector(".one");

$button1.addEventListener("click", function () {
  console.log("hello world");
});

const $button2 = document.querySelector(".two");

const $button = document.querySelector("button");
const $ul = document.querySelector("ul");

$button.addEventListener("click", function () {
  for (let i = 0; i < 5; i++) {
    const $li = document.createElement("li");
    const btnDel = document.createElement("button");
    const btnTxt = document.createTextNode("버튼");

    btnDel.append(btnTxt);
    btnDel.addEventListener("click", () => {
      $li.remove();
    });
    $li.append("삭제하기: ", btnDel);
    $ul.appendChild($li);
  }
});
