$(document).ready(function() {

	$('.header').hide();
	$('.container').hide();
	$('.footer').hide();

    $('#pop-nav a').on('click', function(e) {
        
        e.preventDefault();
           $('.popup').slideUp(900);
           $('.header').show(900);
		   $('.container').show(900);
		   $('.footer').show(900);
    })

});
