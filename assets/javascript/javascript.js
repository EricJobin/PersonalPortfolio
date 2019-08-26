var pdata = [
	{
		name: "GitHub Repository",
		picture: "./assets/images/gitHub640x480.jpg",
		writeup: "Put some stuff here",
		footer: `<a target="_blank" href="https://github.com/EricJobin" class="btn btn-outline-success">Visit My GitHub Repository</a>`,
	},
	{
		name: "Stay In",
		picture: "./assets/images/stayIn640x480.jpg",
		writeup: "Designed to be the Uber for Personal Chefs, Stay In connects people with personal chefs who will come to your home and cook for you",
		footer: `<a target="_blank" href="https://limitless-ocean-73138.herokuapp.com" class="btn btn-outline-success">Visit Deployed Project</a> <a target="_blank" href="https://github.com/EricJobin/HomeChef" class="btn btn-outline-success">Visit Project Repository</a>`,
	},
	{
		name: "Emergency Recipe",
		picture: "./assets/images/emergencyRecipe640x480.jpg",
		writeup: "Don't know what to eat? Have groceries you don't know what to do with? This website will scour the internet to find recipe ideas for ingredients you have at hand, and give you the nutritional data to make informed decisions about what to eat.",
		footer: `<a target="_blank" href="https://ericjobin.github.io/group-project-1/" class="btn btn-outline-success">Visit Deployed Project</a> <a target="_blank" href="https://github.com/EricJobin/group-project-1" class="btn btn-outline-success">Visit Project Repository</a>`,
	},
	{
		name: "",
		picture: "",
		writeup: "",
		footer: `<a target="_blank" href="https://github.com/EricJobin"><button type="button" class="btn btn-outline-success" data-dismiss="modal">Visit Project Repository</button></a>`,
	},
	{
		name: "",
		picture: "",
		writeup: "",
		footer: `<a target="_blank" href="https://github.com/EricJobin"><button type="button" class="btn btn-outline-success" data-dismiss="modal">Visit Project Repository</button></a>`,
	},
	{
		name: "",
		picture: "",
		writeup: "",
		footer: `<a target="_blank" href="https://github.com/EricJobin"><button type="button" class="btn btn-outline-success" data-dismiss="modal">Visit Project Repository</button></a>`,
	},
	// {
	// 	name: "",
	// 	picture: "",
	// 	writeup: "",
	// 	footer: `<a target="_blank" href="https://github.com/EricJobin"><button type="button" class="btn btn-outline-success" data-dismiss="modal">Visit Project Repository</button></a>`,
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