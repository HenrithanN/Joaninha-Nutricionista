//Variavel Botao de busca
var botaoBuscar = document.querySelector("#buscar-pacientes");

//Adicionando um evento de click no botao
botaoBuscar.addEventListener("click", function(){
    console.log("buscando pacientes...");

    //variavel para XMLHttpRequest
    var xhr = new XMLHttpRequest();

    //Abre uma requisicao do tipo GET para a url
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //Adicionando um evento de carregar
    xhr.addEventListener("load", function(){
        //se o status for 200
        if (xhr.status == 200){
            //Printa no console o resultado de texto
            console.log(xhr.responseText);
            //Variavel resposta
            var resposta = xhr.responseText;
            //Variavel pacientes
            var pacientes = JSON.parse(resposta);
            //Percorre o array de pacientes
            pacientes.forEach(function (paciente) {
                //Adiciona os pacientes na tabela            
                adicionaPacienteNaTabela(paciente);
            });
        }
        //Se o status nao for 200
        else{
            //Exibe uma mensagem de erro no console
            console.log(xhr.status);
            console.log(xhr.responseText);
            /*Exibe uma mensagem de erro ao lado do botao*/
            var erroRequisicao = document.querySelector("#erro-requisicao");
            erroRequisicao.classList.remove("invisivel");
            erroRequisicao.classList.add("erro-buscar-pacientes");
        }       

    })

    xhr.send();
})
