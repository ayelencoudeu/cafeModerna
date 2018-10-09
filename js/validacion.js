(function(){
$(document).ready(function(){

	//Efecto Menu
	
	$('.menu a').each(function(index, elemento){

		$(this).css({
			'top':'-200px'
		});

		$(this).animate({ 
			top:'0'
		}, 2000 + (index * 500) );
	});

	

	//scroll Elementos Menu

	var nosotros = $('#nosotros').offset().top;

	$('#btn-nosotros').on('click',function(){
			$('html, body').animate({
				scrollTop:nosotros
			},2000);
	});


	var platillos = $('#platillos').offset().top;

	$('#btn-menu').on('click',function(){
			$('html, body').animate({
				scrollTop:platillos
			},2000);
	});

	var galeria = $('#galeria').offset().top;

	$('#btn-galeria').on('click',function(){
			$('html, body').animate({
				scrollTop:galeria
			},2000);
	});

	var contacto = $('#formulario').offset().top;

	$('#btn-contacto').on('click',function(){
			$('html, body').animate({
				scrollTop:contacto
			},2000);
	});

	var ubicacion = $('#ubicacion').offset().top;

	$('#btn-ubicacion').on('click',function(){
			$('html, body').animate({
				scrollTop:ubicacion
			},2000);
	});

//Validacion del Formulario

	var formulario = document.getElementById('formulario');
	var nombre = formulario.nombre;
	var email = formulario.email;
	var mensaje = formulario.mensaje;
	var error = document.getElementById('error');

	var expresionTexto=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
	function validarNombre(e){
		if (nombre.value === '' || nombre.value == null || !expresionTexto.test(nombre.value)){ 
			error.style.display='block';
			error.innerHTML = error.innerHTML + '<li>Por favor completa solo con letras</li>';
			e.preventDefault();
		}else{error.style.display='none';
			return true;}
	}
	var expresionCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	function validarEmail(e){
		if(email.value == '' || email.value == null || !expresionCorreo.test(email.value)){
			error.style.display='block';
			error.innerHTML = error.innerHTML + '<li>Ingresa un email valido</li>';
			e.preventDefault();
		}else{error.style.display='none';
				return true;}
	}

	function validarMensaje(e){

		if(mensaje.value == '' || mensaje.value==null || !expresionTexto.test(nombre.value) ){
			error.style.display='block';
			error.innerHTML = error.innerHTML + '<li>Ingresa un Mensaje</li>';
			e.preventDefault();
		}else{error.style.display='none';
				return true;}

	}

	function validar(e){
		error.innerHTML="";/*para resetear los errores*/
		validarNombre(e);
		validarEmail(e);
		validarMensaje(e);

		if(validarNombre && validarEmail && validarMensaje){
			alert('Gracias por tu mensaje!');
		}
	}

	formulario.addEventListener('submit', validar);

});


}());