//Varivavel Titulo, pegando a tag title.
var titulo = document.querySelector("title");
//Variavel Subtitulo, pegando a tag h1.
var subtitulo = document.querySelector("h1");

//Alterando o valor de texto das nossas variaveis.
titulo.textContent = "Joaninha Nutricionista";
subtitulo.textContent = "Joaninha Nutrição"

//Buscando os pacientee na tabela e os atribuindo a uma variavel
var pacientes = document.querySelectorAll(".paciente");

//Loop passando por todos os elementos da lista.
for (var i = 0; i < pacientes.length; i++){
    //Paciente é = paciente na posição [i] do vetor.
    var paciente = pacientes[i];
    //Buscando um tags especificas e as atribuindo a variaveis
    var tdMassa = pacientes[i].querySelector(".info-peso");
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var tdIMC = pacientes[i].querySelector(".info-imc");

    //Buscando variaveis especificas e as atribuindo valores dentro das tags.
    var massa = tdMassa.textContent;
    var altura = tdAltura.textContent;
    var IMC = massa / (altura * 2);

    //Variaveis com valor verdadeiro validando o peso e altura
    var pesoEhValido = validaPeso(massa);
    var alturaEhValida = validaAltura(altura);

    //Criando Condicoes
    if (!pesoEhValido){
        //Atribuindo novo valor de texto a tag TD.info-imc
        tdIMC.textContent = "Peso Invalido!";
        pesoEhValido = false;
        //Adicionando uma classe ao elemento no html
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaEhValida){
        //Atribuindo novo valor de texto a tag TD.info-imc
        tdIMC.textContent = "Altura Invalida!";
        alturaEhValida = false;
        //Adicionando uma classe ao elemento no html
        paciente.classList.add("paciente-invalido")
    }  

    if ((!alturaEhValida) && (!pesoEhValido)){
        tdIMC.textContent = "Peso e Altura Invalidos!";
        //Adicionando uma classe ao elemento no html
        alturaEhValida = false;
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }
    if(pesoEhValido && alturaEhValida){
        //Calculando indice de massa corporal e atribuindo a uma variavel
        var imc = calculaIMC(peso, altura); 
        //Atribuindo novo valor de texto a tag TD.info-imc
        tdIMC.textContent = IMC.toFixed(2);
    }
    
}
//funcao para validar peso
function validaPeso(massa){
    if (massa >= 0 && massa < 1000){
        return true;
    }
    else{
        return false;
    }
}
//Funcao para Validar Altura
function validaAltura(altura){
    if(altura >= 0 && altura <=3){
        return true;
    }
    else{
        return false;
    }
}
//funcao para o calculo de imc
function calculaIMC(peso, altura){
    var imc = 0;

    imc = peso / (altura * 2);
    return imc.toFixed(2);
    
}