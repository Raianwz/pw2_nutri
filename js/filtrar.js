let filtro = document.querySelector("#filtro");

filtro.addEventListener("input", function () {
    pacinetes = document.querySelectorAll(".paciente");

    pacientes.forEach(function (paciente) {
        let nome = paciente.querySelector(".info-nome").textContent;
        let regex = new RegExp(filtro.value, "i");
        if (!regex.test(nome)) {
            paciente.classList.add("oculto");
        } else {
            paciente.classList.remove("oculto");
        }
    });

    //remover oculto de todos quando a barra de pesquisa está vazia
    if (filtro.value.length === 0) {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove("oculto");
        });
    }
});