/* eventos de java scrip */

const datos = {
	nombre: '',
	celular: '',
	correo: '',
	mensaje: ''
}

//-- eventos de los inputs

//-- metodo querySelector, devuelve el primer elemento del document que coincida con el selector 
let nombre = document.querySelector('#nombre');
let celular = document.querySelector('#celular');
let correo = document.querySelector('#correo');
let mensaje = document.querySelector('#mensaje');

// console.log(nombre);
// console.log(celular);
// console.log(correo);
//console.log(mensaje);


//-- metodo addEventListener, escucha un evento indicado y ejecuta funcion
//nombre.addEventlistener('input', funcionPrueba);


//function funcionPrueba(){
//	alert('Hola');
//}

nombre.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento){
	//console.log(evento);
	datos[evento.target.id] = evento.target.value;
	// console.log(datos);
}

const formulario = document.querySelector('.formulario');
//console.log(formulario);
formulario.addEventListener('submit', function(evento){
	evento.preventDefault();
	const { nombre, celular, correo, mensajes} = datos;

	if (nombre === '' || celular === '' || correo === '' || mensaje === '') {
		//console.log('Todos los campos son obligatorios');
		mostrarError('Todos los campos son obligatorios')
		return; //-- para la ejecucion del programa
	}
	mostrarMensaje("Enviando Datos Correctamente")
	//console.log('Procesando formulario');
});

function mostrarError(mensaje){
	// console.log(mensaje);
	//--- crea un nuevo elemento de html
	let error = document.createElement('p');
	error.textContent = mensaje;
	error.classList.add('error');
	// console.log(mensaje);
	formulario.appendChild(error);

	setTimeout(() => {
		error.remove();
	}, 5000);

}

function mostrarMensaje(mensaje){
	// console.log(mensaje);
	//--- crea un nuevo elemento de html
	let alerta = document.createElement('p');
	alerta.textContent = mensaje;
	alerta.classList.add('correcto');
	// console.log(mensaje);
	formulario.appendChild(alerta);

	setTimeout(() => {
		alerta.remove();
	}, 3000);

}