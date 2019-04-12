function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var correct = 0;

if (question1 == "Yes") {
		correct++;
    }
	if (question2 == "Very independent") {
		correct++;
    }	
	if (question3 == "Oh, yes I like learning") {
		correct++;
	}
	if (question4 == "Absolutely yes") {
		correct++;
	}
		
	if (question5 == "Very sharp") {
		correct++;
	}
		
	if (question6 == "Yes I am") {
		correct++;
	}
	if (question7 == "Very friendly") {
		correct++;
	}
		
	var pictures = ["images/thumbsup.png", "images/code.jpg", "images/thumbdown.jpeg"];
	var messages = ["Congrats! You qualify to apply for RC retreat!", "You've tried, try to apply next time!", "Oh, sorry I don't think RC is for you!"];
	var score;

	if (correct == 0 && correct < 3) {
		score = 2;
	}

	if (correct > 3 && correct < 7) {
		score = 1;
	}

	if (correct == 7) {
		score = 0;
	}

	document.getElementById("results").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " questions correct!";
	document.getElementById("picture").src = pictures[score];
	}
	
	
	
	

 