$(document).ready(function() {

	$('.header').hide();
	$('.container').hide();
	$('.footer').hide();

    $('#pop-nav a').on('click', function(e) {
        
        e.preventDefault();
           $('.popup').slideUp(900);
           $('.header').show(000);
		   $('.container').show(000);
		   $('.footer').show(000);
    })

	$.each( $('*'), function() { 
	    if( $(this).width() > $('body').width()) {
	        console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
	    } 
	});

});
