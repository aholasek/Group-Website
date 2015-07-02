
 function results() {
 	var div = document.createElement('div');
 	compare(userscore,computerscore);
div.textContent = "You've chosen " + userChoice + " and the Computer has choosen " + computerChoice + "The computer's score is " + computerscore + "and your score is " + userscore;


div.setAttribute('class', 'note');
document.body.appendChild(div);




var computerChoice = "";
var userChoice = "";
function computerThink(){
	computerChoice = Math.floor(Math.random()*3);
	if(computerChoice === 1){
	   computerChoice = "rock";
	}
	else if(computerChoice === 2){
		computerChoice = "paper";
	}
	else{
		computerChoice = "scissors";
	}
}

var rockPick = function(){
	userChoice = "rock";
	computerThink();
	results();
};

 function paperPick() {
 	userChoice = "paper";
 	computerThink();
 	results();
}

 function scissorsPick() {
 	userChoice = "scissors";
 	computerThink();
 	results();
 }







function compare(choice1, choice2) {
	if (choice1 === choice2) {
		alert("You tie");

	}
	else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			userscore++;	
		}
		else {
			computerscore++;
		}
	}
	else if (choice1 === "paper") {
		if (choice2 === "rock") {
			userscore++;
		}
		else {
			computerscore++;
		}
	}
		else if (choice1 === "scissors") {
		if (choice1 === "paper") {
			userscore++;
		}
		else {
			computerscore++;
		}
	}
}




 
 }


var userscore = 0;
var computerscore = 0;


