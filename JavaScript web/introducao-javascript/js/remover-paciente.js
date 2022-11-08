var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function (event) {
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function () {
		event.target.parentNode.remove();
	}, 500);

	// var alvo = event.target;
	// var paiAlvo = alvo.parentNode;
	// paiAlvo.remove(); -->> Outra forma de fazer
});
