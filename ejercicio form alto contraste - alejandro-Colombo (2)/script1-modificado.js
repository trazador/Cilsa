// script.js (conmuta modo y texto del botón)
const botonCambioModo = document.getElementById("cambioModo");
const elementoBody = document.body;
const textoBoton = document.getElementById("cambioModo").textContent; // Guarda el texto inicial del botón

function cambiaTextoBoton() {
	if (botonCambioModo.textContent == "Activar Modo Alto Contraste") {
		botonCambioModo.textContent = "Activar Modo Normal";
		//elementoBody.classList.remove("alto-cont");
		elementoBody.classList.add("alto-cont");
	} else {
		botonCambioModo.textContent = "Activar Modo Alto Contraste";
		//elementoBody.classList.add("alto-cont");
		elementoBody.classList.remove("alto-cont");
	}
}

botonCambioModo.addEventListener("click", function () {
	cambiaTextoBoton();
});
