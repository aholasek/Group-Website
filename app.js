var computerChoice = "";
var userChoice = "";
function computerThink(){
	computerChoice = Math.floor(Math.random()*3);
	if(computerChoice) === 1){
	   computerChoice = "rock";
	}
	else if(computerChoice === 2){
		computerChoice = "paper";
	}
	else{
		computerChoice = "scissors";
	}
};

function rockPick () {
	userChoice = "rock";
	computerThink();
	results();
};
 function paperPick () {
 	userChoice = "paper";
 	computerThink();
 	results();
 };
 function scissorsPick () {
 	userChoice = "scissors";
 	computerThink();
 	results();
 }







function compare(choice1, choice2) {
	if (choice1 === choice2) {
		alert("You've tied with the computer!");
	}
	else if (choice1 === "rock") {
		if (choice2 === "scissors") {
			alert("You've Won!");
		}
		else {
			alert("You've lost to the computer!");
		}
	}
	else if (choice1 === "paper") {
		if (choice2 === "rock") {
			alert("You've Won!");
		}
		else {
			alert("You've lost to the computer!");
		}
	}
		else if (choice1 === "scissors") {
		if (choice1 === "paper") {
			alert("You've Won!");
		}
		else {
			alert("You've lost to the computer!");
		}
	}
};












 function results() {
 	alert("You choose" + userChoice);
 	alert("The Computer chooses" + computerChoice);
 	compare(userChoice, computerChoice);
 };

 function compare(choice1, choice2) {
 	if (choice1 === "rock") {















function compare(choice1, choice2) {
	if (choice1 === choice2)


}