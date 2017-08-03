
// Caching
var button = document.getElementById("button");

var data = ['paper','scissor', 'rock']; // array


var chances = 4;

var win = 0;

function generate(first) {
	
	var random = Math.floor(Math.random() * first.length);

	var val = first[random];

	//console.log(val);

	return val;
}



function select() {

	var result = generate(data);

	console.log(result);
  
	if(result === 'paper'){
		chances--;

		if(chances <= 0){

			alert("Sorry man, you lost!!!");

			chances = 4;
		}

		console.log("Chances: " + chances);
	} else{
		win++;

		if(win >= 5){
			
			alert("Yupeeee!, you made!!");

			win = 0;
		}

		console.log("Win: " + win);
	}
}




button.addEventListener('click', select);


