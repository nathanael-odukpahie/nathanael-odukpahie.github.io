$(document).ready(function() {
  	$('select').niceSelect();
 	$('.max-count').text($('.textarea-message').attr('maxlength'));
});

$(document).ready(function() {

  	$('select').niceSelect();
  	
 	$('.max-count').text($('.textarea-message').attr('maxlength'));

  	$('.show-order').on('click', function(){
  		$('.popup, .icon-1, .icon-2, .icon-3').addClass('show');
  	});

  	$('.hide-order').on('click', function(){
  		$('.icon-1, .icon-2, .icon-3').removeClass('show');
  		$('.popup').removeClass('show');
  	});

	$('.textarea-message').on('keyup',function(){
		var count = $(this).val();
	  	$('.current-count').text(count.length);
	}); 
});