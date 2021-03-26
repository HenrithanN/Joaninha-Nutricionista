//Declarando uma variavel botao e adicionando seu valor
var botao = document.querySelector("#adicionar-paciente");
//Variavel botao vai ouvir um evento de (click)
botao.addEventListener("click",function(event){
    //Previnindo o evento padrao do botao
    event.preventDefault();

    //Declarando uma variavel formulario e adicionando seu valor
    var form = document.querySelector("#form-adicionar");

    //Coletando dados do formulario
    var paciente = coletaDadosDoForm(form);


    
    //Criando uma mensagem de erro
        var erros = validaPaciente(paciente);
        
        if (erros.length > 0){
            exibeMensagensDeErro(erros);

            return;
        }
        

    adicionaPacienteNaTabela(paciente);

    form.reset();
    
    //Pegando o ID das mensagens de erro e transformando em uma mensagem de sucesso
    //Quando o formulario for enviado.
    var formularioSucesso = document.querySelector("#mensagens-erro");
    formularioSucesso.classList.add("Sucesso")
    formularioSucesso.innerHTML = "Formulário Enviado Com Sucesso!";


});
function adicionaPacienteNaTabela(paciente){
    //Criando nova linha na tabela com os dados do formulario
    var pacienteTr = criaLinha(paciente);    
    //Declarando uma variavel e atribuindo a ela um valor
    var tabela = document.querySelector("#tabela-pacientes");
    //Declarando a variavel tr como filha da tabela
    tabela.appendChild(pacienteTr);
}
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.classList.remove("Sucesso");
    ul.classList.add("alerta-erro")
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;

        ul.appendChild(li);
    })
}

function coletaDadosDoForm(form){
    //Declarando variaveis e lhes dando os valores digitados no form

    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaIMC (form.peso.value, form.altura.value)
    }
    return paciente;
}

function criaLinha(paciente){
    //Criando uma variavel que vai criar um elemento tr
    var pacienteTr = document.createElement("tr")
    //Adicionando classe ao elemento tr
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(criaColuna(paciente.nome, "info-nome"))
    pacienteTr.appendChild(criaColuna(paciente.peso, "info-peso"))
    pacienteTr.appendChild(criaColuna(paciente.altura, "info-altura"))
    pacienteTr.appendChild(criaColuna(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(criaColuna(paciente.imc, "info-imc"))


    return pacienteTr;
}
function criaColuna(dado, classe){
    //Criando variavel que vai criar um elemento HTML <td></td>
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    if (paciente.nome.length == 0){
        erros.push("Preencha o campo Nome");
    }
    if (paciente.gordura.length == 0){
        erros.push("Preencha o Campo Gordura !")
    }
    if (paciente.altura.length == 0){
        erros.push("Preencha o campo Altura !");
    }
    if (paciente.peso.length == 0){
        erros.push("Preencha o Campo Peso !")
    }
    if (!validaPeso(paciente.peso)){
        erros.push("O Peso é Inválido !");
    }
    if (!validaAltura(paciente.altura)){
        erros.push("A Altura é Inválida !");
    }
    return erros;
}


