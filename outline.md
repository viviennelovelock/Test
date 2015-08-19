
 Project #0: The Game
Overview

Let's start out with something fun - a game!

We'll be making Tic Tac Toe, a game that takes seconds to learn but minutes to master! Everyone will get a chance to be creative, and work through some really tough programming challenges to get your feet wet in the world of web development.

What You've Learned

By the time you submit this project, you will have covered new ground in many of the big themes of the course:

Command Line: Practice interacting with the computer and navigating the filesystem from the command line.
Source Control: Manage and interact with a git repository to store changes to code.
Programming Fundamentals: Work with objects, constructors, events, while learning how to strategically solve problems and resolve errors.
Web Fundamentals: Learn how communication happens over the internet, and how to structure, style, and animate documents within a browser. Also learn how to respond to actions your users take and the data they input into the browser.
Browser Applications: Dive into CSS, Sass, and how to use libraries and frameworks to get lots of style for free.
Deployment: Host a static web site in a managed hosting environment.
Products and Teams: Document your code and your code repository so others understand what you've built.
Big Goals

Build a web application from scratch, without a starter codebase
Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
Separate HTML, CSS, and JavaScript files in your application
Build an application to a spec that someone else gives you
Build a dynamic game that allows two players to compete
Craft a readme.md file that explains your app to the world
Technical Requirements

Your app must:

Render a game board in the browser
Switch turns between X and O (or whichever markers you select)
Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
Use Javascript for DOM manipulation
Deploy your game online, where the rest of the world can access it
Use semantic markup for HTML and CSS (adhere to best practices)
Bonus

These are for extra credit! Don't focus on these until you've hit the core requirements.

Keep track of multiple game rounds with a win counter
Allow players to customize their tokens (X, O, name, picture, etc)
Get inventive with your styling, e.g. use hover effects or animations to spiff things up
Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
Support custom board sizes: default is 3x3 but you could allow users to choose a larger board
TRICKIEST: Create an AI opponent: teach Javascript to play an unbeatable game against you
Necessary Deliverables

A working game, built by you, hosted somewhere on the internet
A link to your hosted working game in the URL section of your Github repo
A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
Suggested Ways to Get Started

Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.
Useful Resources

MDN Javascript Docs (a great reference for all things Vanilla Javascript)
jQuery Docs
Github Pages (for hosting your game)
If You Finish Early

We invite you to work on any or all of the following:

A more advanced game (Memory? Battleship? Connect Four?)
Your Github portfolio site
Any other front-end project that interests you


BREAKDOWN

- We are making a game based on tictactoe, you use a nine piece square grid to match three of the same makers in one line. There are two players competing. 

- CSS will hold the style, images and any possible animation
- Index.html will hold the basic page layout and style
- Javascript will hold the 'game' or the arguments and functionality or the game
- readme.md will hold information describing the game to developers or anyone reading the code.

- Rules 
	- game has two players player x and y 
	- The game must know when the user clicks (.onClick) and where to confirm a move
	- be able to create a line of three of the same marker
	- log a game as a win, loss or draw. 
	- visually display result (css)
	- log overall wins, losses and draws.
	- clear board for new game


Proposed steps

- the board a 3x3 grid, be able to clickOn the grid in the squares. grid should have columns and rows. 9 boxes so 9 clickOn functions(?)

- how to differentiate the boxes i.e. first righthand corner box is row1 col1 
   - the grid is the canvas/element and the bpxes are id's within the element.


- to lodge a marker, and which type of marker. Insert an image either player x or player o

- return a value, yes you can have this box, no you can't or yes + call the gameEnd function(?)

- four main var/actions page loaded, clickedOn, check score, game won/game reset
 - global variables such as box, marker 

check to find winning combinations, you could try an array with the winning numbers, eg 123, 147 etc 



-  when a grid.box num is clicked on it cycles through the function to find out 
	- is this a blank box ""
	- if not chage value/ place marker
	- does this row now equal the same values
	- if it does start function 'you won', log winner x or y, invite next game




so grid is the canvas, the boxes inside 1-9 each hold a " " space or a marker,
a matching row should equal a winning game.

 var answers = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];





TO DO

1. Research javascript and jQuery methods to aid. also tables in css
2. Begin thinking of basic style and theme of game. - css
3. 

end of day 1
- how to find winning combinations- array of possible answers


end of day 2,
further research on tables needed, jquery selectors and id classes

so we still need a physical table/gid to work in and a way to differetiate the boxes.
id.class

also start thinking of how to structure arguments. what are the main arguments?
 - which player are you > where are you putting your marker > is this spot available >
 log that a marker was placed here > search winning array for possible win> if loss >
 continue to next player > how do we keep calling 'nextPlay' > if won return 'congrats'. log overall win and losses for players x & y > clear board with prompt for new game. 

callbacks without arguments i.e. game end 
$.get( "initial game play function", myCallBack );
 
callbakcs with arguments i.e. next players turn, which player 

$.get( "myhtmlpage.html", function() {
 
    myCallBack( param1, param2 );
 
});


selecting boxes requires a div then an id 
$( "#myDivId" );



- events can be used to run once or multiple times, ideal for play x and y interaction.
- so if our try to run a function that when player x selects box 0, getElementById > which will find the box and attachEventListener which says to place a physical marker and attachEvent > push players go into array > search for winning array > attachEvent which runs the funcion again for player O --- see jqueary events 

- try 



- to find if there is a x or o, ues this as a template.

// Quick Table Search
$('#search').keyup(function() {
  var regex = new RegExp($('#search').val(), "i");
  var rows = $('table tr:gt(0)');
  rows.each(function (index) {
    title = $(this).children("#title").html()
    if (title.search(regex) != -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});





