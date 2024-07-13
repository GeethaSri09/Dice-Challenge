var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomImageIndex1 = "dice" + randomNumber1 + ".png";
var randomImage1 = "images/" + randomImageIndex1;
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomImageIndex2 = "dice" + randomNumber2 + ".png";
var randomImage2 = "images/" + randomImageIndex2;
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1 == randomNumber2){
 document.querySelector("h1").innerHTML = "Draw!"
}
else if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins 🚩";
}