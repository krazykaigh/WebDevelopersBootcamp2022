const player1Btn = document.querySelector("#btn-1");
const player2Btn = document.querySelector("#btn-2");
const reset3Btn = document.querySelector("#btn-3");
const scoreLimiter = document.querySelector("#counter");
const finalScore = document.querySelector("#finalScore");

let player1Score = document.querySelector("#p1Score");
let player2Score = document.querySelector("#p2Score");
let gameOver = false;
let scoreLock = false;
let scoreLimit = scoreLimiter.value;

if (!gameOver) {
  resetColors(".win");
  resetColors(".lose");
}

function resetColors(elemental) {
  let elementsWin = document.querySelectorAll(elemental);
  for(element of elementsWin) {
  element.classList.remove("win");
  element.classList.remove("lose");
  }
}

function scoreSetter(pScore) {
  if(!gameOver){
  let pNum = parseInt(pScore.innerHTML);
  pNum +=1;
  pScore.innerHTML = pNum.toString();

}
}

function checkGameOver() {
  // console.log(`SCORELIMITER = ${scoreLimiter.value}`);
  if (!gameOver && player1Score.innerHTML == scoreLimit) {
    console.log("Player 1 Wins!!")
    colorScores(player1Score, player2Score);
    gameOver = true;
  } else if(!gameOver && player2Score.innerHTML == scoreLimit) {
    console.log("Player 2 Wins!!");
    colorScores(player2Score, player1Score);
    gameOver = true;
  }
}

function colorScores(winPlayer, losePlayer) {
  winPlayer.classList.add("win");
  losePlayer.classList.add("lose");
}

scoreLimiter.addEventListener("change", function(e) {
  if (!scoreLock){  
    scoreLimit = scoreLimiter.value;
    scoreLock= true;
    scoreLimiter.style.display = "none";
    finalScore.innerHTML = scoreLimit;
    finalScore.style.display = "inline-block";
    
  }
})

player1Btn.addEventListener("click", function() {
  scoreLock = true; 
  scoreSetter(player1Score);
  checkGameOver();
})

player2Btn.addEventListener("click", () => {
  scoreLock = true;
  scoreSetter(player2Score);
  checkGameOver();
})

reset3Btn.addEventListener("click", () => {
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;
  scoreLock = false;
  gameOver = false;
  scoreLimiter.style.display ="inline-block";
  finalScore.style.display = "none";
  resetColors(".win");
  resetColors(".lose");
})

