//for 1st dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = "dice" + randomNumber1 + ".png";

var randomNumber3 = "images/" + randomNumber2;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomNumber3);


//for 2nd dice
var ran1 = Math.floor(Math.random() *6)+1;

var img = "dice" + ran1 + ".png";
var src = "images/" + img;

image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , src);

var h = document.querySelector("h1");
if(randomNumber1>ran1){
    h.innerHTML = "Player 1 wins";
}
else if(randomNumber1<ran1){
    h.innerHTML = "Player 2 wins";
}
else{
    h.innerHTML = "Draw";
}

