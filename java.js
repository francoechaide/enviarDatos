let enviar = document.getElementById("enviar");

/*async function enviarDatos(nombre, apellido, nac) {
	const persona = { nombre, apellido, nac };

	const response = await fetch("https://jsonplaceholder.typicode.com/users", {
		method: "POST",

		body: JSON.stringify(persona),

		headers: {
			"Content-type": "application/json",
		},
	});
	if (response.ok) {
		const Datos = await response.json();
		console.log(Datos);
		document.getElementById("datos").innerHTML = `<p>${Datos.nombre} ${Datos.apellido} ${Datos.nac} </p> `;
	}
}*/

/*function enviarDatos(nombre, apellido, nac) {
	const persona = { nombre, apellido, nac }; //creo el objeto persona con sus datos

	// Se realiza una solicitud HTTP POST utilizando 'fetch' a una URL.
	const response = fetch("https://jsonplaceholder.typicode.com/users", {
		method: "POST", // Se especifica el método HTTP como POST.

		body: JSON.stringify(persona), // Se convierte el objeto 'persona' a formato JSON y se establece como el cuerpo de la solicitud.

		headers: {
			"Content-type": "application/json", // Se establece la cabecera para indicar que el contenido es JSON.
		},
	}) // Se maneja la respuesta de la solicitud.
		.then(response => {
			if (response.ok) {
				// Si la respuesta tiene un estado exitoso (por ejemplo, 200 OK), se procesa.
				return response.json(); // Se convierte la respuesta JSON en un objeto JavaScript y se retorna.
			} else {
				// Si la respuesta no es exitosa, se lanza un error.
				throw new error("errorrrrr");
			}
		})
		.then(Datos => {
			// Se maneja el resultado obtenido de la respuesta exitosa.
			console.log(Datos); // Se muestra el objeto 'Datos' en la consola.
			document.getElementById("datos").innerHTML = `<p>${Datos.nombre} ${Datos.apellido} ${Datos.nac} </p> `; // Se actualiza el contenido de un elemento HTML con los datos recibidos.
		})
		.catch(error => {
			// Se captura cualquier error que pueda ocurrir durante la solicitud o el procesamiento de la respuesta.
			console.error(error); // Se muestra el error en la consola.
		});
}*/

function enviarDatos(nombre, apellido, nac) {
	const persona = { nombre, apellido, nac }; //creo el objeto persona con sus datos

	// Se realiza una solicitud HTTP POST utilizando 'fetch' a una URL.
	return fetch("https://jsonplaceholder.typicode.com/users", {
		method: "POST", // Se especifica el método HTTP como POST.

		body: JSON.stringify(persona), // Se convierte el objeto 'persona' a formato JSON y se establece como el cuerpo de la solicitud.

		headers: {
			"Content-type": "application/json", // Se establece la cabecera para indicar que el contenido es JSON.
		},
	}) // Se maneja la respuesta de la solicitud.
		.then(response => {
			if (response.ok) {
				// Si la respuesta tiene un estado exitoso (por ejemplo, 200 OK), se procesa.
				return response.json(); // Se convierte la respuesta JSON en un objeto JavaScript y se retorna.
			} else {
				// Si la respuesta no es exitosa, se lanza un error.
				throw new error("errorrrrr");
			}
		})
		.catch(error => {
			// Se captura cualquier error que pueda ocurrir durante la solicitud o el procesamiento de la respuesta.
			console.error(error); // Se muestra el error en la consola.
		});
}
enviar.addEventListener("click", function () {
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let nac = document.getElementById("fechaNac").value;

	enviarDatos(nombre, apellido, nac).then(dato => {
		console.log(dato);
	});
});
