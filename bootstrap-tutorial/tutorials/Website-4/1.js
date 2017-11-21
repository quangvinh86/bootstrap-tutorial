$(document).ready(function(){
    $('.navbar-right li:nth-child(1) a')
	.click(function(){
        var body = $("html, body");
        body.animate({
            scrollTop:750});
		return false; 
    });
    
	$('.navbar-right li:nth-child(2) a')
	.click(function(){
        var body = $("html, body");
		body.animate({
            scrollTop:750});
		return false; 
	});

	$('.navbar-right li:nth-child(3) a')
	.click(function(){
        var body = $("html, body");
        body.stop().animate({scrollTop:1100}, 500, 'swing', function() { 
         });
		return false; 
	});

});