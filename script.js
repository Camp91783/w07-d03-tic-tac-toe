window.addEventListener("load", setUpPage);


 //function changeTurn() {
		//var changeTurn = document.getElementById('changeTurn');
	  //changeTurn.setAttribute("onClick", "changeTurn();");
//} 	 		
			//if(changeTurn == 'X'){
           //changeTurn = 'O';
      //} else {
           //changeTurn = 'X';
      //}   
 


function setUpPage() {
		var tiles = document.getElementsByClassName("board-tile");
		for (var i = 0; i < tiles.length; i++ ){
			tiles[i].addEventListener("click", changeToX);
		}
}

function setUpPage() {
		var tiles = document.getElementsByClassName("board-tile");
		for (var i = 0; i < tiles.length; i++ ){
			tiles[i].addEventListener("click", changeToO);
		}
}

  // initialize whatever variables you need and add your event listeners
  // you can (but probably shouldn't) define functions inside this function


	function changeToX() {
		this.innerHTML = "X";
	} 
	
	function changeToO() {
		this.innerHTML = "O";
	} 



