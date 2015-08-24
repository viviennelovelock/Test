$( document ).ready(function() {

	 console.log("This is a simple game")

	 var ticTacToe = {

	 	// These variables hold the value of the board cells.
	 	a1: '',
		a2: '',
		a3: '',
		b1: '',
		b2: '',
		b3: '',
		c1: '',
		c2: '',
		c3: '',

		turn: 0,

		playerOne: 'X',
		
		playerTwo: 'O',

		currentPlayer: 'X',

		boardCheck: function () {
			// Updates the variables for each of the cells.
		    a1 = $('#a1').text();
		    a2 = $('#a2').text();
		    a3 = $('#a3').text();
		    b1 = $('#b1').text();
		    b2 = $('#b2').text();
		    b3 = $('#b3').text();
		    c1 = $('#c1').text();
		    c2 = $('#c2').text();
		    c3 = $('#c3').text();
		    // console.log(a1 + a2 + a3 + b1 + b2 + b3 + c1 + c2 + c3);
		},

		checkWin: function() {
			if ((a1 === a2 && a1 === a3 && (a1 !== "")) || //first row
	    		(b1 === b2 && b1 === b3 && (b1 !== "")) || //second row
	    		(c1 === c2 && c1 === c3 && (c1 !== "")) || //third row
	    		(a1 === b1 && a1 === c1 && (a1 !== "")) || //first column
	    		(a2 === b2 && a2 === c2 && (a2 !== "")) || //second column
	    		(a3 === b3 && a3 === c3 && (a3 !== "")) || //third column
	    		(a1 === b2 && a1 === c3 && (a1 !== "")) || //diagonal 1
	    		(a3 === b2 && a3 === c1 && (a3 !== ""))) {
	    			alert(ticTacToe.currentPlayer + ' has won the game.');
	    		} //diagonal 2
		}
	}


	$('td').on('click', function() {
		if ($(this).text() === "") {   //checks to make sure th box is free
			// console.log('This cell can be clicked!');

		  if (ticTacToe.turn % 2 === 0) {   //creates a function to switch between players
		  	$(this).text(ticTacToe.playerOne);
		  	ticTacToe.currentPlayer = ticTacToe.playerOne;
		  	// console.log('The current player is ' + ticTacToe.currentPlayer);
		  } else {
		  	$(this).text(ticTacToe.playerTwo);	// up +1 to switch
		  	ticTacToe.currentPlayer = ticTacToe.playerTwo;
		  	// console.log('The current player is ' + ticTacToe.currentPlayer);
		  };

		  ticTacToe.turn++; 
		  ticTacToe.boardCheck();  //boardcheck 
		  ticTacToe.checkWin();   //wincheck
		}

	});

	$('#reset').on('click', function() {
		console.log ("reset button");
		a1 = $('#a1').text("");
	    b1 = $('#b1').text("");
	    c1 = $('#c1').text("");
	    a2 = $('#a2').text("");
	    b2 = $('#b2').text("");
	    c2 = $('#c2').text("");
	    a3 = $('#a3').text("");
	    b3 = $('#b3').text("");
	    c3 = $('#c3').text("");
	    ticTacToe.turn = 0;
	});


});



