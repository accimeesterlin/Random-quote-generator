
// Caching the DOM
var button = document.getElementById("button");

var data = ['paper','scissor', 'rock']; // array

// Global Variables
var chances = 4;
var win = 0;

// Declaring a function
// Storing a function in memory
function generate(first) {
	
	var random = Math.floor(Math.random() * first.length);

	var val = first[random];

	return val; // making the function equal to the actual value
}


// Declaring a function named selected
function select() {

	var result = generate(data); // invoking the generate function

	console.log(result);
  
  	// Conditional logic
	if(result === 'paper'){
		chances--; // decrement things in JavaScript

		if(chances <= 0){

			alert("Sorry man, you lost!!!");

			chances = 4; // hoisting
		}

		console.log("Chances: " + chances);
	} else{
		win++; // increment

		if(win >= 5){
			
			alert("Yupeeee!, you made!!");

			win = 0; // hoisting
		}

		console.log("Win: " + win);
	}
}



// Firing a click button
button.addEventListener('click', select);


