// generate color
function colorGenearte() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
colorGenearte();
let intervalId;
function startChangingColor() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = colorGenearte();
    }, 1000);
  }
}
function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

const start = document
  .querySelector("#start")
  .addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
