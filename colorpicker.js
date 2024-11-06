const color_picker = document.getElementById("color-picker-input");
const body = document.querySelector("body");
// console.log(color_picker);
let color;

color_picker.addEventListener("input", (e) => {
  console.log(e.target.value);
  color = e.target.value;
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    body.style.backgroundColor = color;
  }
});

const wordCountTextArea = document.getElementById("word-counter-textarea");
console.log(wordCountTextArea);

const countBtn = document.getElementById("start-count-btn");
console.log(countBtn);

const wordCount = document.getElementById("word-count");
console.log(wordCount);

let textAreaValue = "";
let wordCountContainerValue = 0;

wordCountTextArea.addEventListener("input", (e) => {
  console.log(e.target.value);
  textAreaValue = e.target.value;
});

countBtn.addEventListener("click", () => {
  wordCountContainerValue = textAreaValue.split(" ").length;
  wordCount.textContent = `Word count: ${wordCountContainerValue}`;
  console.log(wordCountContainerValue);
});
