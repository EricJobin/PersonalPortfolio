var pdata = [
	{
		name: "GitHub Repository",
		picture: "./assets/images/gitHub640x480.jpg",
		writeup: "This here is my GitHub repository, where I keep the code I have written in the past, as a reference and as a snapshot of my abilites as a coder and how I've progressed.",
		footer: `<a target="_blank" href="https://github.com/EricJobin?tab=repositories" class="btn btn-outline-success">Visit My GitHub Repository</a>`,
	},
	{
		name: "Stay In",
		picture: "./assets/images/stayIn640x480.jpg",
		writeup: "Designed to be the Uber for Personal Chefs, Stay In connects people with personal chefs who will come to your home and cook for you.",
		footer: `<a target="_blank" href="https://limitless-ocean-73138.herokuapp.com" class="btn btn-outline-success">Visit Deployed Project</a> <a target="_blank" href="https://github.com/EricJobin/HomeChef" class="btn btn-outline-success">Visit Project Repository</a>`,
	},
	{
		name: "Emergency Recipe",
		picture: "./assets/images/emergencyRecipe640x480.jpg",
		writeup: "Don't know what to eat? Have groceries you don't know what to do with? This website will scour the internet to find recipe ideas for ingredients you have at hand, and give you the nutritional data to make informed decisions about what to eat.",
		footer: `<a target="_blank" href="https://ericjobin.github.io/group-project-1/" class="btn btn-outline-success">Visit Deployed Project</a> <a target="_blank" href="https://github.com/EricJobin/group-project-1" class="btn btn-outline-success">Visit Project Repository</a>`,
	},
	{
		name: "Train Scheduler",
		picture: "./assets/images/trainSchedule640x480.jpg",
		writeup: "This Train Scheduler was created to experiment with the Moment.js library and to have integration with Google Firebase, to maintain persistence across sessions and machines.",
		footer: `<a target="_blank" href="https://ericjobin.github.io/Train-Schedule/" class="btn btn-outline-success">Visit Deployed Project</a> <a target="_blank" href="https://github.com/EricJobin/Train-Schedule" class="btn btn-outline-success">Visit Project Repository</a>`,
	},
	{
		name: "Trivia Game",
		picture: "./assets/images/triviaGame640x480.jpg",
		writeup: "This Trivia Game was created to become familiar with Javascript timers, and jQuery. The site uses a Bootstrap framework. The quiz focuses on the Mythos stories written by H.P. Lovecraft.",
		footer: `<a target="_blank" href="https://ericjobin.github.io/TriviaGame/" class="btn btn-outline-success">Visit Deployed Project</a> <a target="_blank" href="https://github.com/EricJobin/TriviaGame" class="btn btn-outline-success">Visit Project Repository</a>`,
	},
	{
		name: "Hangman Game",
		picture: "./assets/images/wordGuessGame640x480.jpg",
		writeup: "This Word Guess Game is a hangman style game created to become familiar with Javascript events.",
		footer: `<a target="_blank" href="https://ericjobin.github.io/Word-Guess-Game/" class="btn btn-outline-success">Visit Deployed Project</a> <a target="_blank" href="https://github.com/EricJobin/Word-Guess-Game" class="btn btn-outline-success">Visit Project Repository</a>`,
	},
	// {
	// 	name: "",
	// 	picture: "",
	// 	writeup: "",
	// 	footer: `<a target="_blank" href="**Deployed*Project**" class="btn btn-outline-success">Visit Deployed Project</a> <a target="_blank" href="**Repo**" class="btn btn-outline-success">Visit Project Repository</a>,
	// },
];

var anyClick=false;

function displayBio(){
	$("#about").on("click", function(){
		if(anyClick==false){
			$("#aboutMeCardContainer").fadeIn(1000);
			anyClick=true;
		}
		else{
			$("#portfolioContainer").fadeOut(1000);
			setTimeout(function(){ $("#aboutMeCardContainer").fadeIn(1000); }, 1001);
		}
	})
}

function displayPortfolio(){
	$("#portfolio").on("click", function(){
		if(anyClick==false){
			$("#portfolioContainer").fadeIn(1000);
			anyClick=true;
		}
		else{
			$("#aboutMeCardContainer").fadeOut(1000);
			setTimeout(function(){ $("#portfolioContainer").fadeIn(1000); }, 1001);
		}
	})
}

function populateModal(){
	$(".pclick").on("click", function(){
		var project = this.dataset.id;
		$(".modal-title").empty();
 		$(".modal-body").empty();
		$(".modal-footer").empty();
		$(".modal-title").append(pdata[project].name);
		$(".modal-body").append(`<img src="${pdata[project].picture}" id="porjectPic">`);
		$(".modal-body").append(pdata[project].writeup);
		$(".modal-footer").append(pdata[project].footer);
	})
}

$(document).ready(function() {
	displayBio();
	displayPortfolio();
	populateModal()
});