//Variavel do Campo de Texto Filtro
var campoFiltro = document.querySelector("#filtro");
//Adicionando um Evento de Input(Quando o usuario digita)
campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    //Variavel Pacientes
    var pacientes = document.querySelectorAll(".paciente");

    //Se o valor do campo de texto for maior que 0
    if(this.value.length > 0){
        //Percorre o array pacientes
        for (var i = 0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            //Buscara pacientes na coluna Nome
            var tdNome = paciente.querySelector(".info-nome");
            //Conteudo de texto da colna nome
            var nome = tdNome.textContent;
            //Buscara elementos que contenham os caracteres digitados
            var expressao = RegExp(this.value, "i");
            //se os elementos forem diferentes do que foi digitado, serao removidos
            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }
            //se os elementos forem iguais aos digitados, serao mantidos.
            else{
                paciente.classList.remove("invisivel");
            }
        };
    }
    //Se o valor no campo de texto não for maior que 0.
    else{
        //Percorrerá o array de pacientes e os exibirá na tela.
        for (var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }
    
})