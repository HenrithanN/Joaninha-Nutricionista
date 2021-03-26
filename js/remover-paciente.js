//Variavel tabela
var tabela = document.querySelectorAll("table");

console.log(tabela);
//Percorrendo a tabela em busca de pacientes
tabela.forEach(paciente => {
    //Adicionando evento de double click
    paciente.addEventListener("dblclick",function(event){
        console.log("Fui clicado");
        //Dizendo que ira remover o elemento no nó, no caso o filho
        event.target.parentNode.classList.add("remover")

        //Colocando um timer antes de realizar a funcao remover.
        setTimeout(function(){
            event.target.parentNode.remove();
        },500) 
    })
});