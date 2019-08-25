function displayBio(){
	$("#about").on("click", function(){
		$("#aboutMeCardContainer").fadeIn(1000);
	})
}

$(document).ready(function() {
	displayBio();
});