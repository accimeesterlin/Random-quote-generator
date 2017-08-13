
// var backgroundColor = [
// 	'red',
// 	'blue',
// 	'orange',
// 	'green',
// 	'purple'
// ]
// $.ajax();

// Promises

var endpoint = 'https://twitterpopularapi.herokuapp.com/api?';

var params = 'q=donaldtrump&count=10';

$.ajax({
	url:endpoint + params,
	method:'GET',
	dataType:'jsonp'
})
.done(function (data) {

	console.log(data);

	var quotes = [];

	for(var i = 0; i < data.statuses.length; i++){

		quotes.push(data.statuses[i].text);
	
	}

	console.log(quotes);



	var num = Math.floor(Math.random() * quotes.length); // random number

	var randomQuotes = quotes[num]; // random quotes


	// var color = backgroundColor[num];


	var content = $("<p>");

		content.html(randomQuotes);

		content.attr({
			"class":"quotes",
			"data-name":"esterlin"
		});

		content.css({
			"border":"3px solid rgba(0, 0, 0, 0.3)",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"height": "200px",
			"box-shadow": "5px 5px 5px rgba(0, 0, 0, 0.5)"
		});

	$("#result").append(content);



	// Set a click button

	console.log(window);

	$("#random").on('click', function () {

		num = Math.floor(Math.random() * quotes.length); // random number

		randomQuotes = quotes[num]; // random quotes

		// var color = backgroundColor[num];


		content.empty();

		content.append(randomQuotes);

		// var color = backgroundColor[num];

		// $("body").css('background', color);

	});


})
.fail(function (err) {

	console.log(err);

});

































