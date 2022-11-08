var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if (!pesoValido) {
		console.log("Peso inválido!");
		pesoValido = false;
		tdPeso.textContent = "Peso inválido!";
		tdImc.textContent = "--";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaValida) {
		console.log("Altura inválida!");
		alturaValida = false;
		tdAltura.textContent = "Altura inválida!";
		tdImc.textContent = "--";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoValido && alturaValida) {
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
}

function validaPeso(peso) {
	if (peso >= 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if (altura >= 0 && altura <= 3.0) {
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / Math.pow(altura, 2);

	return imc.toFixed(2);
}
