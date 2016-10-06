$(document).ready(function(){
	$("#b-img").fadeIn(1500);
	$("h1").fadeTo(1500, .9);
	$("h6").fadeTo(1500, .9);
	$("#logo").fadeTo(3000, .5);
	$("#logo2").fadeTo(3000, .5);


	$(".menuItem").hover(function(){
		$(this).css("font-size", "16px");
		$(this).css("color", "black");
	}, function(){ 
		$(this).css("font-size", "15px");
		$(this).css("color", "white");
	});

});
