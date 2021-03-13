// Close button handling

const elcloseXpicture = document.getElementById("closeX");
const elBurgerMenuPicture = document.getElementById("burger");

function clickHandler() {
  console.log("By-bye");
  setTimeout(function() {
    elBurgerMenuPicture.remove();
  }, 600);
}

elBurgerMenuPicture.addEventListener("mouseover", clickHandler);

// Display "Welcome" delayed
let element = document.getElementById("welcomeText");
const text1 = "Welcome on the ";
const text2 = "International Space Station";
let textArray = text1.split("");
let innerString = "";

for (let i = 0; i < textArray.length; i++) {
  task(i);
}

setTimeout(function() {
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
