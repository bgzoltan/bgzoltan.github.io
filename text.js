let element = document.getElementById("welcomeText");

const text1 = "Welcome to SAS - ";
const text2 = "Space Center";

let textArray = text1.split("");

console.log(textArray);
let innerString = "";

// Display "Welcome" delayed
for (let i = 0; i < textArray.length; i++) {
  task(i);
}

setTimeout(function() {
  console.log("hello");
  innerString = "";
  textArray = text2.split("");
  element = document.getElementById("spaceText");
  for (let i = 0; i < textArray.length; i++) {
    task(i);
  }
}, 300 * textArray.length);

function task(i) {
  setTimeout(function() {
    innerString = innerString + textArray[i];
    element.innerText = innerString;
  }, 300 * i);
}
