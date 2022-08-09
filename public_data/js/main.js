// shows and hides filtered items
$(".lists-button").click(function() {
	var value = $(this).attr('data-filter');
	if(value === "all") {
		$('.lists-item').show('1000');
	} else {
		$(".lists-item").not('.'+value).hide('3000');
		$('.lists-item').filter('.'+value).show('3000');
	}
});

// changes active class on filter buttons
$('.lists-button').click(function () {
	$(this).siblings().removeClass('is-active');
	$(this).addClass('is-active');
});
