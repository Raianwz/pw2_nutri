var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", evento => { 
    evento.target.parentNode.classList.add("fadeOut");  //animação de apagar
    setTimeout( () => evento.target.parentNode.remove(), 1000) //função de remover
});