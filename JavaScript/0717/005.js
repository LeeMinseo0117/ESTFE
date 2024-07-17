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

const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

myBtn.addEventListener("click", function () {
  myP.textContent = myInput.value;
});

// input 요소에 'input' 이벤트를 연결하면 실시간으로 값이 반영되게 만들 수도 있습니다.
myInput.addEventListener("input", () => {
  myP.textContent = myInput.value;
});

myP.innerHTML = "<strong>I'm Strong!!</strong>";

// innerHTML 은 요소(element) 내에 포함된 HTML 마크업을 가져오거나 설정합니다. 중요한 기능은 innerHTML로 값을 할당할 때, 마크업으로 변환할 수 있는 문자열이 있다면 마크업으로 만들어 보여준다는 것 입니다. 만약 그런 문자열이 없다면 그냥 문자열만 컨텐츠로 설정합니다.

// innerText 속성은 요소의 렌더링된 텍스트 콘텐츠를 나타냅니다. (렌더링된에 주목하세요. innerText는 텍스트 내에 문법적으로 처리가 가능한 텍스트가 있으면 처리가 끝난 결과물을 텍스트로 전달합니다.)

// textContent 속성은 노드의 텍스트 콘텐츠를 표현합니다. 컨텐츠를 단순히 텍스트로만 다룹니다.
