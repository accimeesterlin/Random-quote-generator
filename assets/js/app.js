
// Methods

// text
// append
// html
// attr
// css


// Creating your own attributes
	// data-esterlin

// jQuery Selector
	//$("body")



var title = $("<h1>"); // creating elements

	title.html("Hello World!!"); // adding contents

	// Styling elements with jQuery
	title.css({
		"color":"red",
		"background":"blue"
	});

	// More examples below
		// title.text("Hello World!!!");
		// title.append("Hello World!!");


var form = $("<form>"); // creating a form element


var firstname = $("<input>");  // creating an input element
	
	// Adding only one attribute
		// firstname.attr('type', 'text');

	//. Adding multiple attribute
	firstname.attr({
		"type":'text',
		"name":'Esterlin',
		"class":'btn btn-primary',
		"placeholder":'firstname...',
		"data-age": 29
	});



var lastname = $("<input>"); // creating an input element
	
	// Adding more attributes
	lastname.attr({
		"type":'text',
		"name":'Accime',
		"placeholder":'lastname...',
		"data-month": 12 // creating our own attributes
	});

var send = $("<button>");

	send.text('Send');


// Creating elements, break line
var break1 = $("<br>");

var break2 = $("<br>");	
	

// Adding elements into form element
form.append(firstname, break1, lastname, break2, send);




$("body").append(title); // adding title in the DOM


// A for loop for 25
for(var i = 0; i < 25; i++){

	// Creating an img element
	var img = $("<img>");

		// Setting attributes
		img.attr({
			"src":"https://pbs.twimg.com/profile_images/873392698350239744/mv3xNgV7_400x400.jpg"
		});

	$("body").append(img); // appending the attributes into the DOM
	
}










// Note:
// Take the remaining as a challenge




// <h1>Hello World</h1>

// 	<form>
// 		<input type="text"> <br>
// 		<input type="text"> <br>

// 		<button>Send</button>

// 	</form>


// 	<div>
// 		<h2>Welcome to London</h2>
// 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// 		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// 		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// 		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// 		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// 	</div>


// 	<div>
// 		<h3>Goodbye</h3>
// 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// 		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// 		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// 		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// 		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// 	</div>


// 	<footer>
// 		<p>I am Mr. footer</p>
// 	</footer>
