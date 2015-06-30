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