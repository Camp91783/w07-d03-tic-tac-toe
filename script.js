window.addEventListener("load", function() {

  var squares = document.getElementsByClassName("board-tile");
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", changeSquare);
    squares[i].addEventListener("click", changePlayerTurn);
  }
  var playerTurn = "X";
  var moveCounter = 0;
  var totalMoves = 9;
  var xScore = 0;
  var oScore = 0;
  var cScore = 0;
  var winner;

  function changePlayerTurn() {
    if(playerTurn === "X"){


      elementX = document.getElementById("player-x-ready");
      elementX.setAttribute("class", "hidden");
      elementO = document.getElementById("player-o-ready");
      elementO.setAttribute("class", "visible");
      this.removeEventListener("click", changePlayerTurn);
      playerTurn = "O";
    }else {
      elementO = document.getElementById("player-o-ready");
      elementO.setAttribute("class", "hidden");
      elementX = document.getElementById("player-x-ready");
      elementX.setAttribute("class", "visible");
      this.removeEventListener("click", changePlayerTurn);
      playerTurn = "X";
    }
      moveCounter++;

    if(moveCounter > 4) {
      checkWinner();
    }
  }
// this changes the value of the square and turns of the EventListener
  function changeSquare() {
    if(playerTurn === "X"){
        this.innerHTML="X";
        this.removeEventListener("click", changeSquare);

      }else {
        this.innerHTML="O";
        this.removeEventListener("click", changeSquare);
    }
  }

function checkWinner(){
  var tile11=document.getElementById("tile-1-1").innerHTML;
  var tile12=document.getElementById("tile-1-2").innerHTML;
  var tile13=document.getElementById("tile-1-3").innerHTML;
  var tile21=document.getElementById("tile-2-1").innerHTML;
  var tile22=document.getElementById("tile-2-2").innerHTML;
  var tile23=document.getElementById("tile-2-3").innerHTML;
  var tile31=document.getElementById("tile-3-1").innerHTML;
  var tile32=document.getElementById("tile-3-2").innerHTML;
  var tile33=document.getElementById("tile-3-3").innerHTML;
// X's possible winning moves
  if((tile11 === "X" && tile12 === "X" && tile13 === "X") ||
     (tile21 === "X" && tile22 === "X" && tile23 === "X") ||
     (tile31 === "X" && tile32 === "X" && tile33 === "X") ||
     (tile11 === "X" && tile21 === "X" && tile31 === "X") ||
     (tile12 === "X" && tile22 === "X" && tile32 === "X") ||
     (tile13 === "X" && tile23 === "X" && tile33 === "X") ||
     (tile11 === "X" && tile22 === "X" && tile33 === "X") ||
     (tile31 === "X" && tile22 === "X" && tile13 === "X")){

// x is the winner box
    elX = document.getElementById("player-x-wins");
    elX.setAttribute("class", "visible");
    elementX = document.getElementById("player-x-ready");
    elementX.setAttribute("class", "hidden");

    xScore++;
    scoreX = document.getElementById("x-score");
    scoreX.innerHTML=xScore;
    alert("X IS THE WINNER");

    endGame();

// O's possible winning moves
  }else if((tile11 === "O" && tile12 === "O" && tile13 === "O") ||
    (tile21 === "O" && tile22 === "O" && tile23 === "O") ||
    (tile31 === "O" && tile32 === "O" && tile33 === "O") ||
    (tile11 === "O" && tile21 === "O" && tile31 === "O") ||
    (tile12 === "O" && tile22 === "O" && tile32 === "O") ||
    (tile13 === "O" && tile23 === "O" && tile33 === "O") ||
    (tile11 === "O" && tile22 === "O" && tile33 === "O") ||
    (tile31 === "O" && tile22 === "O" && tile13 === "O")){
// makes O winner message visible and hides player turn message
    elO = document.getElementById("player-o-wins");
    elO.setAttribute("class", "visible");
    elementO = document.getElementById("player-o-ready");
    elementO.setAttribute("class", "hidden");

    oScore++;
    scoreO = document.getElementById("o-score");
    scoreO.innerHTML=oScore;
    alert("O IS THE WINNER");
    endGame();

    var para = document.createElement("li");
    var node = document.createTextNode("O is the winner");
    para.appendChild(node);
    var element = document.getElementById("game-log");
    element.appendChild(para);
// tie game
  }else if((moveCounter === 9) && (winner === undefined)){

    elC = document.getElementById("tie-game");
    elC.setAttribute("class", "visible");

    scoreC = document.getElementById("c-score");
    scoreC.innerHTML=cScore;
    alert("cats game");
    endGame();

    var para = document.createElement("li");
    var node = document.createTextNode("cats game.");
    para.appendChild(node);
    var element = document.getElementById("game-log");
    element.appendChild(para);
  }
}

function resetGame(){
  newGame();
  xPlayerWins = 0
  oPlayerWins = 0
  turnSwitch = 0
  xScoreDisplay();
  oScoreDisplay();
  playerToggle();
}
function endGame(){
  elementX = document.getElementById("player-x-ready");
  elementX.setAttribute("class", "hidden");
  elementO = document.getElementById("player-o-ready");
  elementO.setAttribute("class", "hidden");
    for(var i = 0; i < squares.length; i++){
      squares[i].removeEventListener("click", changeSquare);
      squares[i].removeEventListener("click", changePlayerTurn);
    }


}
});