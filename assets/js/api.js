
var backgroundColor = [
	'red',
	'blue',
	'orange',
	'green',
	'purple'
];

var endpoint = 'https://twitterpopularapi.herokuapp.com/api?';

var params = 'q=donaldtrump&count=10';


// Making an API call
$.ajax({
	url:endpoint + params,
	method:'GET',
	dataType:'jsonp'
})
.done(function (data) {

	console.log(data);

	var quotes = []; // empty array that's going to hold the data

	// Looping through the data
	for(var i = 0; i < data.statuses.length; i++){

		quotes.push(data.statuses[i].text); // pushing the empty array
	
	}


	var num = Math.floor(Math.random() * quotes.length); // random number

	var randomQuotes = quotes[num]; // random quotes



	var content = $("<p>"); // creating a p element

		content.html(randomQuotes);

		content.attr({
			"class":"quotes",
			"data-name":"esterlin"
		}); // adding different attributes

		content.css({
			"border":"3px solid rgba(0, 0, 0, 0.3)",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"height": "200px",
			"box-shadow": "5px 5px 5px rgba(0, 0, 0, 0.5)"
		}); // styling with css

	$("#result").append(content); // adding p element into the DOM



	// Click event on a button with id of random
	$("#random").on('click', function () {

		num = Math.floor(Math.random() * quotes.length); // random number

		colorNum = Math.floor(Math.random() * backgroundColor.length); // random color num

		randomQuotes = quotes[num]; // random quotes

		var color = backgroundColor[colorNum];


		content.empty(); // empty everything inside that element

		content.append(randomQuotes); // adding content that element

		var color = backgroundColor[num]; // random color

		content.css('background', color); // adding random color

	});


})

// In case we don't get any data from the API
.fail(function (err) {

	console.log(err);

});

































