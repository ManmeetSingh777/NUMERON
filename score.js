// Iteration 5: Store the player score and display it on the game over screen


let score =localStorage.getItem('score')
let scoreBoard = document.getElementById("score-board")
scoreBoard.innerText=score;
var play_again = document.getElementById("play-again-button")
play_again.onclick = function(){playagain()}

function playagain(){

    location.href='./game.html';
}


