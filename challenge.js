const giftBox = document.getElementById("gift-box");
const clickBtn = document.getElementById("click-btn");
console.log(giftBox);
console.log(clickBtn);

clickBtn.onclick = () => {
  console.log("clicked");
  giftBox.classList.toggle("hide");
};

document.addEventListener("keydown", (e) => {
  console.log(e.ctrlKey, e.key);
  if (e.key === "Y" && e.ctrlKey) {
    giftBox.classList.toggle("hide");
  }
});


