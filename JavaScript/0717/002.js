// const button = document.createElement("button");
// document.body.appendChild(button);
// button.innerText = "Make me MORE!";

// const ul = document.createElement("ul");
// document.body.appendChild(ul);

// button = document.querySelector("button");

// button.addEventListener("click", function () {
//   for (let i = 1; i <= 9; i++) {
//     const myLi = document.createElement("li");
//     ul.appendChild(myLi);
//     $li.innerText(`2 x ${i} = ${2 * i}`);
//   }
// });

const myBtn = document.querySelector("button");
const myUl = document.querySelector("ul");

myBtn.addEventListener("click", function () {
  for (let i = 1; i < 10; i++) {
    const myLi = document.createElement("li");
    myLi.append(`2 x ${i} = ${2 * i}`);
    // myLi.innerText = `2 x ${i} = ${2 * i}`;
    myUl.appendChild(myLi);
  }
});
