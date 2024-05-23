var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var imgOne = "./images/dice" + randomNumber1 + ".png";
var imgTwo = "./images/dice" + randomNumber2 + ".png";

const img1 = document.querySelector(".img1");
img1.setAttribute("src", imgOne);
const img2 = document.querySelector(".img2");
img2.setAttribute("src", imgTwo);

const myHeading = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
myHeading.textContent = "Player 1 Wins!"
}else if(randomNumber1 < randomNumber2) {
    myHeading.textContent = "Player 2 Wins!"
}else {
    myHeading.textContent = "Draw!"
}