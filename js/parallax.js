$(document).ready(function(){

	$(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 800){
			var scroll = $(window).scrollTop();

			$('header .contenedor .textos').css({
				'transform': 'translate(0px,' + scroll / 4 + '%)'
			});

			$('.main .nosotros article').css({
				'transform': 'translate(0px, -' + scroll / 2 + '%)'
			});
		}
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 800) {
			$('#nosotros').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});

	//Para el cambio de vertical a horizontal en tabletas

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 800){
			$('.main .nosotros article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});

	

});