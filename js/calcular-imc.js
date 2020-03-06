let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(pacienteTr => {
    let paciente = {
        //pega o peso e altura do paciente
        peso: pacienteTr.querySelector(".info-peso").textContent,
        altura: pacienteTr.querySelector(".info-altura").textContent
    }

    let tdIMC = pacienteTr.querySelector(".info-imc");
    //validação dos Dados
    if (!validarPeso(paciente.peso)) {
        tdIMC.textContent = "Peso inválido";
        pacienteTr.classList.add("paciente-invalido");
    }

    if (!validarAltura(paciente.altura)) {
        tdIMC.textContent = "Altura inválida";
        pacienteTr.classList.add("paciente-invalido");
    }

    if (validarPaciente(paciente)) tdIMC.textContent = calcularIMC(paciente);
});
//calcular IMC do Paciente
function calcularIMC(paciente) {
    let imc = paciente.peso / paciente.altura ** 2;
    return imc.toFixed(2);
}

function validarPeso(peso) {
    return !(peso <= 0 || peso > 1000);
}

function validarAltura(altura) {
    return !(altura <= 0);
}

function validarPaciente(paciente) {
    return (
        validarPeso(paciente.peso) &&
        validarAltura(paciente.altura)
    );
}
