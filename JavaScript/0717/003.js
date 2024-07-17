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

const target = document.querySelector("p");
const txtColor = target.style.color; // 현재 스타일 정보를 가져옵니다.
target.style.color = "red"; // 현재 스타일 정보를 변경합니다.
target.style.fontWeight = "bold"; // 현재 스타일 정보에 font-weight 속성이 없다면 추가합니다.
target.style.color = null; // 현재 스타일 정보를 제거(초기화)합니다.
