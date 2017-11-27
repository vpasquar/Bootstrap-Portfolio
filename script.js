$(document).ready(function() {

	$('.header').hide();
	$('.container').hide();
	$('.footer').hide();

    $('#pop-nav a').on('click', function(e) {
        
        e.preventDefault();
           $('.popup').slideUp(900);
           $('.header').show(700);
		   $('.container').show(700);
		   $('.footer').show(700);
    })

$.each( $('*'), function() { 
    if( $(this).width() > $('body').width()) {
        console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
    } 
});

});
