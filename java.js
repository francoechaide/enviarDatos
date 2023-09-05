let enviar = document.getElementById("enviar");

async function enviarDatos(nombre, apellido, nac) {
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
	}
}
enviar.addEventListener("click", function () {
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let nac = document.getElementById("fechaNac").value;

	enviarDatos(nombre, apellido, nac);
});
