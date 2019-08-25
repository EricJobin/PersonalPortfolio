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

$(document).ready(function() {
	displayBio();
	displayPortfolio();
});