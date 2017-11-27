$(document).ready(function() {

	$('.header').hide();
	$('.container').hide();
	$('.footer').hide();

    $('#pop-nav a').on('click', function(e) {
        
        e.preventDefault();
           $('.popup').slideUp(900);
           $('.header').slideDown(900);
		   $('.container').slideDown(900);
		   $('.footer').slideDown(900);
    })

});
