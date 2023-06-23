(function(){


'use strict';
let score = 20, highScore = 0;

// user input
let inputNumber = document.getElementsByClassName("guess")[0];

// play again button
const btnAgain = document.getElementsByClassName("btn")[0],
// the check button
btnCheck  = document.getElementsByClassName("btn")[1],

// function to generate a random number
NumberGenerate = (min, max) => (Math.floor(Math.random() * (max - min + 1 ) + min));
let currentNumber;
currentNumber = NumberGenerate(1,20);

// show the feedback to user
let messageElement  = document.querySelector(".message"),
// the feedback
message ;

// show score
const showScore = document.querySelector(".score"); 
const showHighScore = document.querySelector(".highscore"); 

btnCheck.addEventListener("click",function(event){
    if (inputNumber.value.trim() == '' || inputNumber.value < 1 || inputNumber.value > 20) {
        alert("Please Enter A Number between 1 and  20 !");
        return;
    }
    if(score === 0) {
        alert("Sorry You lost");
        return;
    }

   if(Number(inputNumber.value) > currentNumber) { 
        message = "Too high!";
        score--;
   }
       
   else if (Number(inputNumber.value) === currentNumber){
        document.body.style.backgroundColor = "#56AA3F";
        document.querySelector('.number').textContent = currentNumber;
        message = "Correct Answer!"; 
        highScore = highScore < score ? score : highScore;
        showHighScore.textContent = highScore;
    }
   else {
        message = "Too low!";
        score--;
   }
   messageElement.textContent = message;
   showScore.textContent = score;
})


btnAgain.addEventListener("click",function(){
    currentNumber = NumberGenerate(1,20);
    document.querySelector('.number').textContent = "?";
    document.body.style.backgroundColor = "#222222";
    score = 20;
    showScore.textContent = 20;
});


})();
