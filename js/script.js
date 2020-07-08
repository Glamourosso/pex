$(document).ready(function() {
	$('.header-burger').click(function(event) {
		$('.header-burger,.header-menu,.masthead').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg(){
	$.each($('.ibg'), function(index, val){
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();