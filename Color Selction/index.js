const colorCode = document.getElementById("colorCode");

const generateRandomColor = document.getElementById("generateRandomColor");

const saveRandomColor = document.getElementById("saveRandomColor");

const savedColor = document.getElementById("saved__color");

// 1. Random Function in js
// Hex color

const charsInHexColor = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const savedColorArr = [];

generateRandomColor.addEventListener("click", (e) => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += charsInHexColor[Math.floor(Math.random() * 16)];
  }
  colorCode.innerText = color;
  colorCode.style.background = color;
});

saveRandomColor.addEventListener("click", (e) => {
  const color = colorCode.innerText;
  savedColorArr.push(color);
  let htmlToAppend = "";
  savedColorArr.forEach((item) => {
    htmlToAppend += `<span class="color_code" style="background:${item};margin:5px;">${item}</span>`;
  });
  savedColor.innerHTML = htmlToAppend;
});
