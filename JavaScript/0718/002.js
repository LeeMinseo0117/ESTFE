const $button = document.querySelector(".btn-select");
const $ul = document.querySelector("ul");
const $li = document.querySelector("li");
const $Python = document.querySelector("#Python");
const $Java = document.querySelector("#Java");
const $JavaScript = document.querySelector("#JavaScript");
const $Cs = document.querySelector("#Cs");
const $Cp = document.querySelector("#Cp");

$button.addEventListener("click", function (event) {
  if ($ul.style.display == "none") {
    $ul.style.display = "block";
  } else {
    $ul.style.display = "none";
  }
});

$Python.addEventListener("click", function () {
  $button.textContent = "Python";
});

$Java.addEventListener("click", function () {
  $button.textContent = "Java";
});
$JavaScript.addEventListener("click", function () {
  $button.textContent = "JavaScript";
});
$Cs.addEventListener("click", function () {
  $button.textContent = "C#";
});
$Cp.addEventListener("click", function () {
  $button.textContent = "C/C++";
});
