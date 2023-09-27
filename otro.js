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
