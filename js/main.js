let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {

//function cacularImc(paciente){

        /* [Código Legado] - usado antes de criar a função criar calcularImc após a extinta função anonima
            for (var i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i]*/

    //pegar peso 
    let peso = paciente.querySelector(".info-peso").textContent;
    //pegar a altura
    let altura = paciente.querySelector(".info-altura").textContent;

    let pesoValido = true;
    let alturaValida = true;

    let tdIMC = paciente.querySelector(".info-imc");
    //validar dados
    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0) {
        alturaValida = false;
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
    //calcular o IMC
        let imc = peso / altura ** 2;
    //escrever o IMC na Tabela
        tdIMC.textContent = imc.toFixed(2);
    }
});